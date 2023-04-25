import axios from "axios";
import https from "https";

const sendData = async (endpoint: string, buffer: Uint8Array) => {
    try {
        const result = await axios.post(
            `https://ticker-4fcdcc.local${endpoint}`,
            buffer,
            {
                headers: {
                    "Content-type": "application/octet-stream",
                },
                responseType: "arraybuffer",
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false,
                }),
            }
        );
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

export default sendData;
