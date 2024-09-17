import sendData from "../transport";
import { statusToString } from "../status";

import SessionSchema from "./proto/session_pb";
import Sec0Schema from "./proto/sec0_pb";

export const establishSession = async (): Promise<{
    status:
        | "Success"
        | "InvalidSecScheme"
        | "InvalidProto"
        | "TooManySessions"
        | "InvalidArgument"
        | "InternalError"
        | "CryptoError"
        | "InvalidSession"
        | "Failed";
}> => {
    const SessionData = new SessionSchema.SessionData();

    SessionData.setSecVer(SessionSchema.SecSchemeVersion.SECSCHEME0);

    const Sec0Payload = new Sec0Schema.Sec0Payload();

    Sec0Payload.setMsg(Sec0Schema.Sec0MsgType.S0_SESSION_COMMAND);

    Sec0Payload.setSc(new Sec0Schema.S0SessionCmd());

    SessionData.setSec0(Sec0Payload);

    const buffer = SessionData.serializeBinary();

    const bufferResult = await sendData("/esp_local_ctrl/session", buffer);

    const response = SessionSchema.SessionData.deserializeBinary(bufferResult);

    const status = response.getSec0()?.getSr()?.getStatus();

    const statusResult = statusToString(status);

    return { status: statusResult };
};
