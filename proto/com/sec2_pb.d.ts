// package: 
// file: sec2.proto

import * as jspb from "google-protobuf";
import * as constants_pb from "./constants_pb";

export class S2SessionCmd0 extends jspb.Message {
  getClientUsername(): Uint8Array | string;
  getClientUsername_asU8(): Uint8Array;
  getClientUsername_asB64(): string;
  setClientUsername(value: Uint8Array | string): void;

  getClientPubkey(): Uint8Array | string;
  getClientPubkey_asU8(): Uint8Array;
  getClientPubkey_asB64(): string;
  setClientPubkey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S2SessionCmd0.AsObject;
  static toObject(includeInstance: boolean, msg: S2SessionCmd0): S2SessionCmd0.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S2SessionCmd0, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S2SessionCmd0;
  static deserializeBinaryFromReader(message: S2SessionCmd0, reader: jspb.BinaryReader): S2SessionCmd0;
}

export namespace S2SessionCmd0 {
  export type AsObject = {
    clientUsername: Uint8Array | string,
    clientPubkey: Uint8Array | string,
  }
}

export class S2SessionResp0 extends jspb.Message {
  getStatus(): constants_pb.StatusMap[keyof constants_pb.StatusMap];
  setStatus(value: constants_pb.StatusMap[keyof constants_pb.StatusMap]): void;

  getDevicePubkey(): Uint8Array | string;
  getDevicePubkey_asU8(): Uint8Array;
  getDevicePubkey_asB64(): string;
  setDevicePubkey(value: Uint8Array | string): void;

  getDeviceSalt(): Uint8Array | string;
  getDeviceSalt_asU8(): Uint8Array;
  getDeviceSalt_asB64(): string;
  setDeviceSalt(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S2SessionResp0.AsObject;
  static toObject(includeInstance: boolean, msg: S2SessionResp0): S2SessionResp0.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S2SessionResp0, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S2SessionResp0;
  static deserializeBinaryFromReader(message: S2SessionResp0, reader: jspb.BinaryReader): S2SessionResp0;
}

export namespace S2SessionResp0 {
  export type AsObject = {
    status: constants_pb.StatusMap[keyof constants_pb.StatusMap],
    devicePubkey: Uint8Array | string,
    deviceSalt: Uint8Array | string,
  }
}

export class S2SessionCmd1 extends jspb.Message {
  getClientProof(): Uint8Array | string;
  getClientProof_asU8(): Uint8Array;
  getClientProof_asB64(): string;
  setClientProof(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S2SessionCmd1.AsObject;
  static toObject(includeInstance: boolean, msg: S2SessionCmd1): S2SessionCmd1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S2SessionCmd1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S2SessionCmd1;
  static deserializeBinaryFromReader(message: S2SessionCmd1, reader: jspb.BinaryReader): S2SessionCmd1;
}

export namespace S2SessionCmd1 {
  export type AsObject = {
    clientProof: Uint8Array | string,
  }
}

export class S2SessionResp1 extends jspb.Message {
  getStatus(): constants_pb.StatusMap[keyof constants_pb.StatusMap];
  setStatus(value: constants_pb.StatusMap[keyof constants_pb.StatusMap]): void;

  getDeviceProof(): Uint8Array | string;
  getDeviceProof_asU8(): Uint8Array;
  getDeviceProof_asB64(): string;
  setDeviceProof(value: Uint8Array | string): void;

  getDeviceNonce(): Uint8Array | string;
  getDeviceNonce_asU8(): Uint8Array;
  getDeviceNonce_asB64(): string;
  setDeviceNonce(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S2SessionResp1.AsObject;
  static toObject(includeInstance: boolean, msg: S2SessionResp1): S2SessionResp1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S2SessionResp1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S2SessionResp1;
  static deserializeBinaryFromReader(message: S2SessionResp1, reader: jspb.BinaryReader): S2SessionResp1;
}

export namespace S2SessionResp1 {
  export type AsObject = {
    status: constants_pb.StatusMap[keyof constants_pb.StatusMap],
    deviceProof: Uint8Array | string,
    deviceNonce: Uint8Array | string,
  }
}

export class Sec2Payload extends jspb.Message {
  getMsg(): Sec2MsgTypeMap[keyof Sec2MsgTypeMap];
  setMsg(value: Sec2MsgTypeMap[keyof Sec2MsgTypeMap]): void;

  hasSc0(): boolean;
  clearSc0(): void;
  getSc0(): S2SessionCmd0 | undefined;
  setSc0(value?: S2SessionCmd0): void;

  hasSr0(): boolean;
  clearSr0(): void;
  getSr0(): S2SessionResp0 | undefined;
  setSr0(value?: S2SessionResp0): void;

  hasSc1(): boolean;
  clearSc1(): void;
  getSc1(): S2SessionCmd1 | undefined;
  setSc1(value?: S2SessionCmd1): void;

  hasSr1(): boolean;
  clearSr1(): void;
  getSr1(): S2SessionResp1 | undefined;
  setSr1(value?: S2SessionResp1): void;

  getPayloadCase(): Sec2Payload.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sec2Payload.AsObject;
  static toObject(includeInstance: boolean, msg: Sec2Payload): Sec2Payload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sec2Payload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sec2Payload;
  static deserializeBinaryFromReader(message: Sec2Payload, reader: jspb.BinaryReader): Sec2Payload;
}

export namespace Sec2Payload {
  export type AsObject = {
    msg: Sec2MsgTypeMap[keyof Sec2MsgTypeMap],
    sc0?: S2SessionCmd0.AsObject,
    sr0?: S2SessionResp0.AsObject,
    sc1?: S2SessionCmd1.AsObject,
    sr1?: S2SessionResp1.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    SC0 = 20,
    SR0 = 21,
    SC1 = 22,
    SR1 = 23,
  }
}

export interface Sec2MsgTypeMap {
  S2SESSION_COMMAND0: 0;
  S2SESSION_RESPONSE0: 1;
  S2SESSION_COMMAND1: 2;
  S2SESSION_RESPONSE1: 3;
}

export const Sec2MsgType: Sec2MsgTypeMap;

