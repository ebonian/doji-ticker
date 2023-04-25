import { Buffer } from "buffer";

const sec1 = require("./proto/sec1_pb");
const session = require("./proto/session_pb");

export interface Command0 {
    clientPublic: string;
}

/**
 * Adapter function to convert `Command0` to a serialized
 * protobuf binary before sending via a HTTP
 */
export function serializeCommand0(data: Command0): Uint8Array {
    const sessionCmd0 = new sec1.SessionCmd0();
    sessionCmd0.setClientPubkey(data.clientPublic);

    const sec1Payload = new sec1.Sec1Payload();
    sec1Payload.setMsg(sec1.Sec1MsgType.SESSION_COMMAND0);
    sec1Payload.setSc0(sessionCmd0);

    const sessionData = new session.SessionData();
    sessionData.setSecVer(session.SecSchemeVersion.SECSCHEME1);
    sessionData.setSec1(sec1Payload);

    return sessionData.serializeBinary();
}

export interface Response0 {
    status: number;
    devicePublic: string;
    deviceRandom: string;
}

/**
 * Adapter function to deserialized a protobuf binary which
 * return a `Response0` object
 */
export function deserializeResponse0(data: any): Response0 {
    const buffer = Buffer.from(data, "binary");
    const uint8 = Uint8Array.from(buffer);
    const proto = session.SessionData.deserializeBinary(uint8);
    const payload = proto.getSec1();
    const resp0 = payload.getSr0();

    const status = resp0.getStatus();
    const devicePublic = resp0.getDevicePubkey_asB64();
    const deviceRandom = resp0.getDeviceRandom_asB64();

    return {
        status,
        devicePublic,
        deviceRandom,
    };
}

export interface Command1 {
    clientVerifyData: string;
}

/**
 * Adapter function to convert `Command1` to a serialized
 * protobuf binary before sending via a HTTP
 */
export function serializeCommand1(data: Command1): Uint8Array {
    const sessionCmd1 = new sec1.SessionCmd1();
    sessionCmd1.setClientVerifyData(data.clientVerifyData);

    const sec1Payload = new sec1.Sec1Payload();
    sec1Payload.setMsg(sec1.Sec1MsgType.SESSION_COMMAND1);
    sec1Payload.setSc1(sessionCmd1);

    const sessionData = new session.SessionData();
    sessionData.setSecVer(session.SecSchemeVersion.SECSCHEME1);
    sessionData.setSec1(sec1Payload);

    return sessionData.serializeBinary();
}

export interface Response1 {
    status: number;
    deviceVerifyData: string;
}

/**
 * Adapter function to deserialized a protobuf binary which
 * return a `Response1` object
 */
export function deserializeResponse1(data: any): Response1 {
    const buffer = Buffer.from(data, "binary");
    const uint8 = Uint8Array.from(buffer);
    const proto = session.SessionData.deserializeBinary(uint8);
    const payload = proto.getSec1();
    const resp1 = payload.getSr1();

    const status = resp1.getStatus();
    const deviceVerifyData = resp1.getDeviceVerifyData_asB64();

    return {
        status,
        deviceVerifyData,
    };
}
