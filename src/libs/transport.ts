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
        throw error;
    }
};

export const sendTickerServer = async (url: string, data: any) => {
    try {
        const result = await axios
            .post(url, data, {
                headers: {
                    "Content-type": "application/json",
                },
            })
            .then((res) => res.data)
            .catch(() => null);

        return result;
    } catch (error) {
        throw error;
    }
};

export default sendData;
