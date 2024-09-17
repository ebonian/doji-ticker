// package: 
// file: sec1.proto

import * as jspb from "google-protobuf";
import * as constants_pb from "./constants_pb";

export class SessionCmd1 extends jspb.Message {
  getClientVerifyData(): Uint8Array | string;
  getClientVerifyData_asU8(): Uint8Array;
  getClientVerifyData_asB64(): string;
  setClientVerifyData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionCmd1.AsObject;
  static toObject(includeInstance: boolean, msg: SessionCmd1): SessionCmd1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionCmd1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionCmd1;
  static deserializeBinaryFromReader(message: SessionCmd1, reader: jspb.BinaryReader): SessionCmd1;
}

export namespace SessionCmd1 {
  export type AsObject = {
    clientVerifyData: Uint8Array | string,
  }
}

export class SessionResp1 extends jspb.Message {
  getStatus(): constants_pb.StatusMap[keyof constants_pb.StatusMap];
  setStatus(value: constants_pb.StatusMap[keyof constants_pb.StatusMap]): void;

  getDeviceVerifyData(): Uint8Array | string;
  getDeviceVerifyData_asU8(): Uint8Array;
  getDeviceVerifyData_asB64(): string;
  setDeviceVerifyData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionResp1.AsObject;
  static toObject(includeInstance: boolean, msg: SessionResp1): SessionResp1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionResp1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionResp1;
  static deserializeBinaryFromReader(message: SessionResp1, reader: jspb.BinaryReader): SessionResp1;
}

export namespace SessionResp1 {
  export type AsObject = {
    status: constants_pb.StatusMap[keyof constants_pb.StatusMap],
    deviceVerifyData: Uint8Array | string,
  }
}

export class SessionCmd0 extends jspb.Message {
  getClientPubkey(): Uint8Array | string;
  getClientPubkey_asU8(): Uint8Array;
  getClientPubkey_asB64(): string;
  setClientPubkey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionCmd0.AsObject;
  static toObject(includeInstance: boolean, msg: SessionCmd0): SessionCmd0.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionCmd0, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionCmd0;
  static deserializeBinaryFromReader(message: SessionCmd0, reader: jspb.BinaryReader): SessionCmd0;
}

export namespace SessionCmd0 {
  export type AsObject = {
    clientPubkey: Uint8Array | string,
  }
}

export class SessionResp0 extends jspb.Message {
  getStatus(): constants_pb.StatusMap[keyof constants_pb.StatusMap];
  setStatus(value: constants_pb.StatusMap[keyof constants_pb.StatusMap]): void;

  getDevicePubkey(): Uint8Array | string;
  getDevicePubkey_asU8(): Uint8Array;
  getDevicePubkey_asB64(): string;
  setDevicePubkey(value: Uint8Array | string): void;

  getDeviceRandom(): Uint8Array | string;
  getDeviceRandom_asU8(): Uint8Array;
  getDeviceRandom_asB64(): string;
  setDeviceRandom(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionResp0.AsObject;
  static toObject(includeInstance: boolean, msg: SessionResp0): SessionResp0.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionResp0, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionResp0;
  static deserializeBinaryFromReader(message: SessionResp0, reader: jspb.BinaryReader): SessionResp0;
}

export namespace SessionResp0 {
  export type AsObject = {
    status: constants_pb.StatusMap[keyof constants_pb.StatusMap],
    devicePubkey: Uint8Array | string,
    deviceRandom: Uint8Array | string,
  }
}

export class Sec1Payload extends jspb.Message {
  getMsg(): Sec1MsgTypeMap[keyof Sec1MsgTypeMap];
  setMsg(value: Sec1MsgTypeMap[keyof Sec1MsgTypeMap]): void;

  hasSc0(): boolean;
  clearSc0(): void;
  getSc0(): SessionCmd0 | undefined;
  setSc0(value?: SessionCmd0): void;

  hasSr0(): boolean;
  clearSr0(): void;
  getSr0(): SessionResp0 | undefined;
  setSr0(value?: SessionResp0): void;

  hasSc1(): boolean;
  clearSc1(): void;
  getSc1(): SessionCmd1 | undefined;
  setSc1(value?: SessionCmd1): void;

  hasSr1(): boolean;
  clearSr1(): void;
  getSr1(): SessionResp1 | undefined;
  setSr1(value?: SessionResp1): void;

  getPayloadCase(): Sec1Payload.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sec1Payload.AsObject;
  static toObject(includeInstance: boolean, msg: Sec1Payload): Sec1Payload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sec1Payload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sec1Payload;
  static deserializeBinaryFromReader(message: Sec1Payload, reader: jspb.BinaryReader): Sec1Payload;
}

export namespace Sec1Payload {
  export type AsObject = {
    msg: Sec1MsgTypeMap[keyof Sec1MsgTypeMap],
    sc0?: SessionCmd0.AsObject,
    sr0?: SessionResp0.AsObject,
    sc1?: SessionCmd1.AsObject,
    sr1?: SessionResp1.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    SC0 = 20,
    SR0 = 21,
    SC1 = 22,
    SR1 = 23,
  }
}

export interface Sec1MsgTypeMap {
  SESSION_COMMAND0: 0;
  SESSION_RESPONSE0: 1;
  SESSION_COMMAND1: 2;
  SESSION_RESPONSE1: 3;
}

export const Sec1MsgType: Sec1MsgTypeMap;

