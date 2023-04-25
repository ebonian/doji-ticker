import CryptoJS from "crypto-js";
import { toWordArray } from "./utils";

type WordArray = CryptoJS.lib.WordArray;

export interface CipherContext {
    update: (x: WordArray | Uint8Array) => WordArray;
    reset: () => void;
}

/**
 * Compute a SHA256 hash of any string or `WordArray`
 * @param pop any input in form of string or `WordArray`
 */
export function sha256(pop: string): WordArray;
export function sha256(pop: WordArray): WordArray;
export function sha256(pop: string | WordArray): WordArray {
    if (typeof pop === "string") {
        const encoded = CryptoJS.enc.Latin1.parse(pop);
        return CryptoJS.SHA256(encoded);
    }

    return CryptoJS.SHA256(pop);
}

/**
 * @param key the shared key retrieved from the ECDH protocol.
 * @param nonce the initialization vector of this context.
 * @returns a cipher context which you can simply call `context.update(data)`
 * to encrypte or decrypt any message that is a `WordArray` or an `Uint8Array`.
 */
export function createAesContext(
    key: WordArray,
    nonce: WordArray
): CipherContext {
    let blocksCount = 0;
    let bytesCount = 0; // block-size = 16 bytes
    let context = CryptoJS.algo.AES.createEncryptor(key, {
        iv: nonce,
        mode: CryptoJS.mode.CTR,
        padding: CryptoJS.pad.NoPadding,
    });

    /* A wrapper around actual APi for better abstraction */
    const update = (text: WordArray | Uint8Array) => {
        let _text: WordArray;
        if (text instanceof Uint8Array) {
            _text = toWordArray(text);
        } else {
            _text = text;
        }

        /* check if previous update is block-aligned */
        let result;
        const bytesRem = bytesCount - blocksCount * 16;

        /* if aligned can simply process, otherwise have to pad */
        if (bytesRem === 0) {
            result = context.finalize(_text);
        } else {
            const padded =
                CryptoJS.lib.WordArray.random(bytesRem).concat(_text);
            const cipher = context.finalize(padded);

            /* clean conversion although not as efficient as bit manipulation */
            const str = CryptoJS.enc.Hex.stringify(cipher).slice(
                bytesRem * 2,
                (bytesRem + _text.sigBytes) * 2
            );

            result = CryptoJS.enc.Hex.parse(str);
        }

        /* keeping track of numbers of words and bytes encrypted */
        bytesCount += _text.sigBytes;
        blocksCount = Math.floor(bytesCount / 16);

        /* generate encryptor every times the last encryption is partial */
        if (bytesCount % 16 !== 0) {
            context = CryptoJS.algo.AES.createEncryptor(key, {
                iv: nonce,
                mode: CryptoJS.mode.CTR,
                padding: CryptoJS.pad.NoPadding,
            });

            /* init the vector up to words count */
            context.finalize(CryptoJS.lib.WordArray.random(blocksCount * 16));
        }

        return result;
    };

    const reset = () => {
        blocksCount = 0;
        bytesCount = 0;
        context.reset();
    };

    return { update, reset };
}

/**
 * @deprecated
 * Helper function to provide backward compatibility, although
 * this function isn't required anymore. We can instead call
 * `context.update(data)` to either encrypt and decrypt the data.
 */
export function encryptAes256(text: WordArray, context: CipherContext) {
    const encrypted = context.update(text);
    return encrypted;
}

/**
 * @deprecated
 * Helper function to provide backward compatibility, although
 * this function isn't required anymore. We can instead call
 * `context.update(data)` to either encrypt and decrypt the data.
 */
export function decryptAes256(ciphertext: WordArray, context: CipherContext) {
    const decrypted = context.update(ciphertext);
    return decrypted;
}
