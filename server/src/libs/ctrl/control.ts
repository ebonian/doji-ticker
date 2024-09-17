import sendData from "../transport";
import { typeToString } from "./type";
import { statusToString } from "../status";

import CtrlSchema from "./proto/esp_local_ctrl_pb";

export const getPropertyValue = async (indice: 2 | 3 | 4) => {
    const CmdGetPropertyValues = new CtrlSchema.CmdGetPropertyValues();

    CmdGetPropertyValues.addIndices(indice);

    const LocalCtrlMessage = new CtrlSchema.LocalCtrlMessage();

    LocalCtrlMessage.setMsg(4);

    LocalCtrlMessage.setCmdGetPropVals(CmdGetPropertyValues);

    const buffer = LocalCtrlMessage.serializeBinary();

    const bufferResult = await sendData("/esp_local_ctrl/control", buffer);

    const response =
        CtrlSchema.LocalCtrlMessage.deserializeBinary(
            bufferResult
        ).getRespGetPropVals();

    const prop = response?.getPropsList()[0];

    const status = response?.getStatus();

    const statusString = statusToString(status);

    const name = prop?.getName();

    const type = prop?.getType();

    const typeString = typeToString(type);

    var valueString = new TextDecoder().decode(prop?.getValue_asU8());

    return {
        status: statusString,
        prop: { name: name, type: typeString, value: valueString },
    };
};

export const setPropertyValue = async (indice: 2 | 3 | 4, value: string) => {
    const CmdSetPropertyValue = new CtrlSchema.CmdSetPropertyValues();

    const PropertyValue = new CtrlSchema.PropertyValue();

    PropertyValue.setIndex(indice);

    PropertyValue.setValue(new TextEncoder().encode(value));

    CmdSetPropertyValue.addProps(PropertyValue);

    const LocalCtrlMessage = new CtrlSchema.LocalCtrlMessage();

    LocalCtrlMessage.setMsg(6);

    LocalCtrlMessage.setCmdSetPropVals(CmdSetPropertyValue);

    const buffer = LocalCtrlMessage.serializeBinary();

    const bufferResult = await sendData("/esp_local_ctrl/control", buffer);

    const response =
        CtrlSchema.LocalCtrlMessage.deserializeBinary(
            bufferResult
        ).getRespSetPropVals();

    const status = response?.getStatus();

    const statusString = statusToString(status);

    return { status: statusString };
};
