// package: 
// file: session.proto

import * as jspb from "google-protobuf";
import * as sec0_pb from "./sec0_pb";
import * as sec1_pb from "./sec1_pb";
import * as sec2_pb from "./sec2_pb";

export class SessionData extends jspb.Message {
  getSecVer(): SecSchemeVersionMap[keyof SecSchemeVersionMap];
  setSecVer(value: SecSchemeVersionMap[keyof SecSchemeVersionMap]): void;

  hasSec0(): boolean;
  clearSec0(): void;
  getSec0(): sec0_pb.Sec0Payload | undefined;
  setSec0(value?: sec0_pb.Sec0Payload): void;

  hasSec1(): boolean;
  clearSec1(): void;
  getSec1(): sec1_pb.Sec1Payload | undefined;
  setSec1(value?: sec1_pb.Sec1Payload): void;

  hasSec2(): boolean;
  clearSec2(): void;
  getSec2(): sec2_pb.Sec2Payload | undefined;
  setSec2(value?: sec2_pb.Sec2Payload): void;

  getProtoCase(): SessionData.ProtoCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionData.AsObject;
  static toObject(includeInstance: boolean, msg: SessionData): SessionData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionData;
  static deserializeBinaryFromReader(message: SessionData, reader: jspb.BinaryReader): SessionData;
}

export namespace SessionData {
  export type AsObject = {
    secVer: SecSchemeVersionMap[keyof SecSchemeVersionMap],
    sec0?: sec0_pb.Sec0Payload.AsObject,
    sec1?: sec1_pb.Sec1Payload.AsObject,
    sec2?: sec2_pb.Sec2Payload.AsObject,
  }

  export enum ProtoCase {
    PROTO_NOT_SET = 0,
    SEC0 = 10,
    SEC1 = 11,
    SEC2 = 12,
  }
}

export interface SecSchemeVersionMap {
  SECSCHEME0: 0;
  SECSCHEME1: 1;
  SECSCHEME2: 2;
}

export const SecSchemeVersion: SecSchemeVersionMap;

