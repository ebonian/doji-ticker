import axios from "axios";
import https from "https";
import SessionSchema from "./proto/com/session_pb.js";
import Sec0Schema from "./proto/com/sec0_pb.js";

import CtrlSchema from "./proto/ctrl/esp_local_ctrl_pb.js";

const sendCtrl = async (endpoint: string, buffer: Uint8Array) => {
    try {
        const result = await axios.post(
            `http://ticker-4fcdcc.local${endpoint}`,
            buffer,
            {
                headers: {
                    "Content-type": "application/octet-stream",
                },
                responseType: "arraybuffer",
                // httpsAgent: new https.Agent({
                //     rejectUnauthorized: false,
                // }),
            }
        );
        return result.data;
    } catch (error) {
        throw error;
    }
};

const getPropertyValue = async (indice: 2 | 3 | 4) => {
    const CmdGetPropertyValues = new CtrlSchema.CmdGetPropertyValues();

    CmdGetPropertyValues.addIndices(indice);

    const LocalCtrlMessage = new CtrlSchema.LocalCtrlMessage();

    LocalCtrlMessage.setMsg(4);

    LocalCtrlMessage.setCmdGetPropVals(CmdGetPropertyValues);

    const buffer = LocalCtrlMessage.serializeBinary();

    const bufferResult = await sendCtrl("/esp_local_ctrl/control", buffer);

    const response = CtrlSchema.LocalCtrlMessage.deserializeBinary(bufferResult)
        .getRespGetPropVals()
        ?.getPropsList()[0];

    const name = response?.getName();

    const type = response?.getType();

    var valueString = new TextDecoder().decode(response?.getValue_asU8());

    return { name: name, type: type, value: valueString };
};

const setPropertyValue = async (indice: 2 | 3 | 4, value: string) => {
    const CmdSetPropertyValue = new CtrlSchema.CmdSetPropertyValues();

    const PropertyValue = new CtrlSchema.PropertyValue();

    PropertyValue.setIndex(indice);

    PropertyValue.setValue(new TextEncoder().encode(value));

    CmdSetPropertyValue.addProps(PropertyValue);

    const LocalCtrlMessage = new CtrlSchema.LocalCtrlMessage();

    LocalCtrlMessage.setMsg(6);

    LocalCtrlMessage.setCmdSetPropVals(CmdSetPropertyValue);

    const buffer = LocalCtrlMessage.serializeBinary();

    const bufferResult = await sendCtrl("/esp_local_ctrl/control", buffer);

    const response =
        CtrlSchema.LocalCtrlMessage.deserializeBinary(
            bufferResult
        ).getRespSetPropVals();

    return response?.toObject();
};

const main = async () => {
    const result = await getPropertyValue(3);
    // const result = await setPropertyValue(3, "btc");

    console.log(result);
};

main();
