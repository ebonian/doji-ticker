import axios from "axios";
import CryptoJS from "crypto-js";
import { sharedKey } from "curve25519-js";
import { wa } from "./codec";
import { xor, toWordArray, toUint8Array } from "./utils";

import {
    sha256,
    createAesContext,
    encryptAes256,
    decryptAes256,
} from "./crypto";

import {
    serializeCommand0,
    serializeCommand1,
    deserializeResponse0,
    deserializeResponse1,
} from "./serde";

const POP = "abcd1234";

/**
 * @brief create a secure session with the device.
 * @return `context` a cipher object for future en/decryption
 * @note contain side-effect which is sending the HTTP provisioning request.
 */
export async function createProtoContext(
    publicKey: Uint8Array | string,
    privateKey: Uint8Array | string
) {
    let clientPublic, clientPrivate;

    if (publicKey instanceof Uint8Array) {
        clientPublic = toWordArray(publicKey);
    } else {
        clientPublic = wa.base64decode(publicKey);
    }

    if (privateKey instanceof Uint8Array) {
        clientPrivate = toWordArray(privateKey);
    } else {
        clientPrivate = wa.base64decode(privateKey);
    }

    const serializedCmd0 = { clientPublic: wa.base64encode(clientPublic) };
    const cmd0 = serializeCommand0(serializedCmd0);
    const resp0 = deserializeResponse0(
        await sendProvisioning(cmd0, "prov-session")
    );

    const deviceRandom = wa.base64decode(resp0.deviceRandom);
    const devicePublic = wa.base64decode(resp0.devicePublic);
    const hash = sha256(POP);

    const rawSharedKey = sharedKey(
        toUint8Array(clientPrivate),
        toUint8Array(devicePublic)
    );

    const exchanged = toWordArray(rawSharedKey);
    const xoredKey = xor(exchanged, hash);

    const context = createAesContext(xoredKey, deviceRandom);
    const clientVerifyWa = encryptAes256(devicePublic, context);
    const clientVerifyData = CryptoJS.enc.Base64.stringify(clientVerifyWa);

    const cmd1 = serializeCommand1({ clientVerifyData });
    const resp1 = deserializeResponse1(
        await sendProvisioning(cmd1, "prov-session")
    );

    const deviceVerify = wa.base64decode(resp1.deviceVerifyData);
    const decryptedKey = decryptAes256(deviceVerify, context);
    const status = resp1.status;

    if (status !== 0) {
        throw new Error("Device respond with status code other than 0.");
    }

    if (
        CryptoJS.enc.Hex.stringify(decryptedKey) !==
        CryptoJS.enc.Hex.stringify(clientPublic)
    ) {
        throw new Error("Can't verify the device verification token.");
    }

    return context;
}

export async function sendProvisioning(
    data: Uint8Array,
    endpoint: "proto-ver" | "prov-scan" | "prov-config" | "prov-session",
    tag: string = ""
): Promise<ArrayBuffer> {
    if (!tag) {
        tag = endpoint;
    }

    try {
        const result = await axios.post(
            `${process.env.BASE_URL}/${endpoint}`,
            data,
            {
                responseType: "arraybuffer",
                headers: {
                    Accept: "text/plain",
                    "Content-Type": "application/octet-stream",
                },
            }
        );

        return result.data;
    } catch (e: any) {
        if (tag) throw new Error(`[${tag}] ${e.message}`);
        else throw e;
    }
}
