import sendData from "./transport";

import CtrlSchema from "./proto/esp_local_ctrl_pb";

export const getPropertyValue = async (indice: 2 | 3 | 4) => {
    const CmdGetPropertyValues = new CtrlSchema.CmdGetPropertyValues();

    CmdGetPropertyValues.addIndices(indice);

    const LocalCtrlMessage = new CtrlSchema.LocalCtrlMessage();

    LocalCtrlMessage.setMsg(4);

    LocalCtrlMessage.setCmdGetPropVals(CmdGetPropertyValues);

    const buffer = LocalCtrlMessage.serializeBinary();

    const bufferResult = await sendData("/esp_local_ctrl/control", buffer);

    const response = CtrlSchema.LocalCtrlMessage.deserializeBinary(bufferResult)
        .getRespGetPropVals()
        ?.getPropsList()[0];

    const name = response?.getName();

    const type = response?.getType();

    var valueString = new TextDecoder().decode(response?.getValue_asU8());

    return { name: name, type: type, value: valueString };
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

    return response?.toObject();
};
