import CryptoJS from "crypto-js";

type UintArray = Uint8Array | Uint16Array | Uint32Array;
type ExUintArray = UintArray | CryptoJS.lib.WordArray;

function zip<T>(a: T[], b: T[]): [T, T][] {
    return a.map((v, i) => [v, b[i]]);
}

/**
 * Predictable xor that is guaranteed to be correct
 * in the memory level as this function use `DataView`.
 */
export function xor(a: Uint8Array, b: UintArray): Uint8Array;
export function xor(a: Uint16Array, b: UintArray): Uint16Array;
export function xor(a: Uint32Array, b: UintArray): Uint32Array;
export function xor(
    a: CryptoJS.lib.WordArray,
    b: CryptoJS.lib.WordArray
): CryptoJS.lib.WordArray;

export function xor(a: ExUintArray, b: ExUintArray): ExUintArray {
    if (isWordArray(a) && isWordArray(b)) {
        return xorWordArray(a, b);
    } else if (isWordArray(a) || isWordArray(b)) {
        throw new Error("Both array must be WordArray, not only one of them");
    }

    if (a.byteLength !== b.byteLength) {
        throw new Error(
            `Array length mismatched: ${a.byteLength} and ${b.byteLength}.`
        );
    }

    const viewA = new DataView(a.buffer, a.byteOffset, a.byteLength);
    const viewB = new DataView(b.buffer, b.byteOffset, b.byteLength);

    const temp = new Uint8Array(a.byteLength);
    for (let i = 0; i < a.byteLength; i++) {
        temp[i] = viewA.getUint8(i) ^ viewB.getUint8(i);
    }

    if (a instanceof Uint8Array) {
        return temp;
    } else if (a instanceof Uint16Array) {
        return new Uint16Array(temp.buffer);
    } else if (a instanceof Uint32Array) {
        return new Uint32Array(temp.buffer);
    } else {
        throw new Error("Unexpected type error during xor'ing");
    }
}

function xorWordArray(
    a: CryptoJS.lib.WordArray,
    b: CryptoJS.lib.WordArray
): CryptoJS.lib.WordArray {
    const result = zip(a.words, b.words).map(([a, b]) => a ^ b);
    return CryptoJS.lib.WordArray.create(result);
}

function isWordArray(array: ExUintArray): array is CryptoJS.lib.WordArray {
    return array && "words" in array;
}

/**
 * Force reset the bytes offset of the underlying
 * array buffer by cloning significant value into
 * the new array buffer and return it. Support multiple
 * types by overloading function.
 */
export function alignedClone(x: Uint8Array): Uint8Array;
export function alignedClone(x: Uint16Array): Uint16Array;
export function alignedClone(x: Uint32Array): Uint32Array;
export function alignedClone(x: UintArray): UintArray {
    if (x instanceof Uint8Array) {
        return new Uint8Array(Array.from(x));
    } else if (x instanceof Uint16Array) {
        return new Uint16Array(Array.from(x));
    } else if (x instanceof Uint32Array) {
        return new Uint32Array(Array.from(x));
    } else {
        throw new Error("Unexpected type error in aligned clone");
    }
}

/**
 * Platform agnostic print function for `UintArray`, in
 * other words, this function ignore the system endian
 * and force read the value with specified endian (default to big endian)
 */
export function agnosticPrint(
    array: UintArray,
    size: number,
    littleEndian: boolean = false
) {
    const data = new DataView(array.buffer, array.byteOffset, array.byteLength);
    const length = data.byteLength;

    console.log("[");

    for (let i = 0; i < length; i += size / 8) {
        if (size === 8) {
            console.log(`\t${data.getUint8(i)},`);
        } else if (size === 16) {
            console.log(`\t${data.getUint16(i, littleEndian)},`);
        } else if (size === 32) {
            console.log(`\t${data.getUint32(i, littleEndian)},`);
        } else {
            throw new Error(`Unsupported element size ${size}.`);
        }
    }

    console.log("]");
}

export function toWordArray(from: Uint8Array): CryptoJS.lib.WordArray {
    const length = from.byteLength;
    const view = new DataView(from.buffer, from.byteOffset, from.byteLength);
    const array: number[] = [];

    for (let i = 0; i < length - 3; i += 4) {
        array.push(view.getUint32(i));
    }

    switch (length % 4) {
        case 1: {
            array.push(view.getUint8(length - 1) << 24);
            break;
        }
        case 2: {
            array.push(view.getUint16(length - 2) << 16);
            break;
        }
        case 3: {
            array.push(
                (view.getUint16(length - 3) << 16) +
                    (view.getUint8(length - 1) << 8)
            );
            break;
        }
    }

    return CryptoJS.lib.WordArray.create(array, from.byteLength);
}

export function toUint8Array(from: CryptoJS.lib.WordArray): Uint8Array {
    const length = from.words.length;
    const bytes = from.sigBytes;
    const buffer = new ArrayBuffer(bytes);
    const view = new DataView(buffer);

    for (let i = 0; i < bytes - 3; i += 4) {
        view.setUint32(i, from.words[i / 4]);
    }

    const last = from.words[length - 1] || 0;

    switch (bytes % 4) {
        case 1: {
            view.setUint8(bytes - 1, last >> 24);
            break;
        }
        case 2: {
            view.setUint16(bytes - 2, last >> 16);
            break;
        }
        case 3: {
            view.setUint16(bytes - 3, last >> 16);
            view.setUint8(bytes - 1, (last >> 8) & 0xff);
        }
    }

    return new Uint8Array(buffer);
}
