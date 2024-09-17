// package: 
// file: sec0.proto

import * as jspb from "google-protobuf";
import * as constants_pb from "./constants_pb";

export class S0SessionCmd extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S0SessionCmd.AsObject;
  static toObject(includeInstance: boolean, msg: S0SessionCmd): S0SessionCmd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S0SessionCmd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S0SessionCmd;
  static deserializeBinaryFromReader(message: S0SessionCmd, reader: jspb.BinaryReader): S0SessionCmd;
}

export namespace S0SessionCmd {
  export type AsObject = {
  }
}

export class S0SessionResp extends jspb.Message {
  getStatus(): constants_pb.StatusMap[keyof constants_pb.StatusMap];
  setStatus(value: constants_pb.StatusMap[keyof constants_pb.StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S0SessionResp.AsObject;
  static toObject(includeInstance: boolean, msg: S0SessionResp): S0SessionResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S0SessionResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S0SessionResp;
  static deserializeBinaryFromReader(message: S0SessionResp, reader: jspb.BinaryReader): S0SessionResp;
}

export namespace S0SessionResp {
  export type AsObject = {
    status: constants_pb.StatusMap[keyof constants_pb.StatusMap],
  }
}

export class Sec0Payload extends jspb.Message {
  getMsg(): Sec0MsgTypeMap[keyof Sec0MsgTypeMap];
  setMsg(value: Sec0MsgTypeMap[keyof Sec0MsgTypeMap]): void;

  hasSc(): boolean;
  clearSc(): void;
  getSc(): S0SessionCmd | undefined;
  setSc(value?: S0SessionCmd): void;

  hasSr(): boolean;
  clearSr(): void;
  getSr(): S0SessionResp | undefined;
  setSr(value?: S0SessionResp): void;

  getPayloadCase(): Sec0Payload.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sec0Payload.AsObject;
  static toObject(includeInstance: boolean, msg: Sec0Payload): Sec0Payload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sec0Payload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sec0Payload;
  static deserializeBinaryFromReader(message: Sec0Payload, reader: jspb.BinaryReader): Sec0Payload;
}

export namespace Sec0Payload {
  export type AsObject = {
    msg: Sec0MsgTypeMap[keyof Sec0MsgTypeMap],
    sc?: S0SessionCmd.AsObject,
    sr?: S0SessionResp.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    SC = 20,
    SR = 21,
  }
}

export interface Sec0MsgTypeMap {
  S0_SESSION_COMMAND: 0;
  S0_SESSION_RESPONSE: 1;
}

export const Sec0MsgType: Sec0MsgTypeMap;

