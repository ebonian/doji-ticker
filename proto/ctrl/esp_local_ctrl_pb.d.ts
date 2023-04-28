// package: 
// file: esp_local_ctrl.proto

import * as jspb from "google-protobuf";

export class CmdGetPropertyCount extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CmdGetPropertyCount.AsObject;
  static toObject(includeInstance: boolean, msg: CmdGetPropertyCount): CmdGetPropertyCount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CmdGetPropertyCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CmdGetPropertyCount;
  static deserializeBinaryFromReader(message: CmdGetPropertyCount, reader: jspb.BinaryReader): CmdGetPropertyCount;
}

export namespace CmdGetPropertyCount {
  export type AsObject = {
  }
}

export class RespGetPropertyCount extends jspb.Message {
  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RespGetPropertyCount.AsObject;
  static toObject(includeInstance: boolean, msg: RespGetPropertyCount): RespGetPropertyCount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RespGetPropertyCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RespGetPropertyCount;
  static deserializeBinaryFromReader(message: RespGetPropertyCount, reader: jspb.BinaryReader): RespGetPropertyCount;
}

export namespace RespGetPropertyCount {
  export type AsObject = {
    status: StatusMap[keyof StatusMap],
    count: number,
  }
}

export class PropertyInfo extends jspb.Message {
  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  getName(): string;
  setName(value: string): void;

  getType(): number;
  setType(value: number): void;

  getFlags(): number;
  setFlags(value: number): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyInfo): PropertyInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyInfo;
  static deserializeBinaryFromReader(message: PropertyInfo, reader: jspb.BinaryReader): PropertyInfo;
}

export namespace PropertyInfo {
  export type AsObject = {
    status: StatusMap[keyof StatusMap],
    name: string,
    type: number,
    flags: number,
    value: Uint8Array | string,
  }
}

export class CmdGetPropertyValues extends jspb.Message {
  clearIndicesList(): void;
  getIndicesList(): Array<number>;
  setIndicesList(value: Array<number>): void;
  addIndices(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CmdGetPropertyValues.AsObject;
  static toObject(includeInstance: boolean, msg: CmdGetPropertyValues): CmdGetPropertyValues.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CmdGetPropertyValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CmdGetPropertyValues;
  static deserializeBinaryFromReader(message: CmdGetPropertyValues, reader: jspb.BinaryReader): CmdGetPropertyValues;
}

export namespace CmdGetPropertyValues {
  export type AsObject = {
    indicesList: Array<number>,
  }
}

export class RespGetPropertyValues extends jspb.Message {
  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  clearPropsList(): void;
  getPropsList(): Array<PropertyInfo>;
  setPropsList(value: Array<PropertyInfo>): void;
  addProps(value?: PropertyInfo, index?: number): PropertyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RespGetPropertyValues.AsObject;
  static toObject(includeInstance: boolean, msg: RespGetPropertyValues): RespGetPropertyValues.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RespGetPropertyValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RespGetPropertyValues;
  static deserializeBinaryFromReader(message: RespGetPropertyValues, reader: jspb.BinaryReader): RespGetPropertyValues;
}

export namespace RespGetPropertyValues {
  export type AsObject = {
    status: StatusMap[keyof StatusMap],
    propsList: Array<PropertyInfo.AsObject>,
  }
}

export class PropertyValue extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyValue.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyValue): PropertyValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyValue;
  static deserializeBinaryFromReader(message: PropertyValue, reader: jspb.BinaryReader): PropertyValue;
}

export namespace PropertyValue {
  export type AsObject = {
    index: number,
    value: Uint8Array | string,
  }
}

export class CmdSetPropertyValues extends jspb.Message {
  clearPropsList(): void;
  getPropsList(): Array<PropertyValue>;
  setPropsList(value: Array<PropertyValue>): void;
  addProps(value?: PropertyValue, index?: number): PropertyValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CmdSetPropertyValues.AsObject;
  static toObject(includeInstance: boolean, msg: CmdSetPropertyValues): CmdSetPropertyValues.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CmdSetPropertyValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CmdSetPropertyValues;
  static deserializeBinaryFromReader(message: CmdSetPropertyValues, reader: jspb.BinaryReader): CmdSetPropertyValues;
}

export namespace CmdSetPropertyValues {
  export type AsObject = {
    propsList: Array<PropertyValue.AsObject>,
  }
}

export class RespSetPropertyValues extends jspb.Message {
  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RespSetPropertyValues.AsObject;
  static toObject(includeInstance: boolean, msg: RespSetPropertyValues): RespSetPropertyValues.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RespSetPropertyValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RespSetPropertyValues;
  static deserializeBinaryFromReader(message: RespSetPropertyValues, reader: jspb.BinaryReader): RespSetPropertyValues;
}

export namespace RespSetPropertyValues {
  export type AsObject = {
    status: StatusMap[keyof StatusMap],
  }
}

export class LocalCtrlMessage extends jspb.Message {
  getMsg(): LocalCtrlMsgTypeMap[keyof LocalCtrlMsgTypeMap];
  setMsg(value: LocalCtrlMsgTypeMap[keyof LocalCtrlMsgTypeMap]): void;

  hasCmdGetPropCount(): boolean;
  clearCmdGetPropCount(): void;
  getCmdGetPropCount(): CmdGetPropertyCount | undefined;
  setCmdGetPropCount(value?: CmdGetPropertyCount): void;

  hasRespGetPropCount(): boolean;
  clearRespGetPropCount(): void;
  getRespGetPropCount(): RespGetPropertyCount | undefined;
  setRespGetPropCount(value?: RespGetPropertyCount): void;

  hasCmdGetPropVals(): boolean;
  clearCmdGetPropVals(): void;
  getCmdGetPropVals(): CmdGetPropertyValues | undefined;
  setCmdGetPropVals(value?: CmdGetPropertyValues): void;

  hasRespGetPropVals(): boolean;
  clearRespGetPropVals(): void;
  getRespGetPropVals(): RespGetPropertyValues | undefined;
  setRespGetPropVals(value?: RespGetPropertyValues): void;

  hasCmdSetPropVals(): boolean;
  clearCmdSetPropVals(): void;
  getCmdSetPropVals(): CmdSetPropertyValues | undefined;
  setCmdSetPropVals(value?: CmdSetPropertyValues): void;

  hasRespSetPropVals(): boolean;
  clearRespSetPropVals(): void;
  getRespSetPropVals(): RespSetPropertyValues | undefined;
  setRespSetPropVals(value?: RespSetPropertyValues): void;

  getPayloadCase(): LocalCtrlMessage.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalCtrlMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LocalCtrlMessage): LocalCtrlMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalCtrlMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalCtrlMessage;
  static deserializeBinaryFromReader(message: LocalCtrlMessage, reader: jspb.BinaryReader): LocalCtrlMessage;
}

export namespace LocalCtrlMessage {
  export type AsObject = {
    msg: LocalCtrlMsgTypeMap[keyof LocalCtrlMsgTypeMap],
    cmdGetPropCount?: CmdGetPropertyCount.AsObject,
    respGetPropCount?: RespGetPropertyCount.AsObject,
    cmdGetPropVals?: CmdGetPropertyValues.AsObject,
    respGetPropVals?: RespGetPropertyValues.AsObject,
    cmdSetPropVals?: CmdSetPropertyValues.AsObject,
    respSetPropVals?: RespSetPropertyValues.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    CMD_GET_PROP_COUNT = 10,
    RESP_GET_PROP_COUNT = 11,
    CMD_GET_PROP_VALS = 12,
    RESP_GET_PROP_VALS = 13,
    CMD_SET_PROP_VALS = 14,
    RESP_SET_PROP_VALS = 15,
  }
}

export interface StatusMap {
  SUCCESS: 0;
  INVALIDSECSCHEME: 1;
  INVALIDPROTO: 2;
  TOOMANYSESSIONS: 3;
  INVALIDARGUMENT: 4;
  INTERNALERROR: 5;
  CRYPTOERROR: 6;
  INVALIDSESSION: 7;
}

export const Status: StatusMap;

export interface LocalCtrlMsgTypeMap {
  TYPECMDGETPROPERTYCOUNT: 0;
  TYPERESPGETPROPERTYCOUNT: 1;
  TYPECMDGETPROPERTYVALUES: 4;
  TYPERESPGETPROPERTYVALUES: 5;
  TYPECMDSETPROPERTYVALUES: 6;
  TYPERESPSETPROPERTYVALUES: 7;
}

export const LocalCtrlMsgType: LocalCtrlMsgTypeMap;

