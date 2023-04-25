import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { TickerContext } from "../contexts/TickerContext";
import axios from "axios";

const Settings: NextPage = () => {
    const { tickerServerURL, setTickerServerURL } = useContext(TickerContext);

    const [checkURL, setCheckURL] = useState<"idle" | "failed" | "success">(
        "idle"
    );

    const checkTickerServerURL = async () => {
        if (tickerServerURL === "") return;

        await axios
            .get(tickerServerURL)
            .then(() => setCheckURL("success"))
            .catch(() => setCheckURL("failed"));
    };

    return (
        <div className="p-5">
            <h3>Ticker Server URL</h3>
            <input
                type="url"
                value={tickerServerURL}
                onChange={(e) => setTickerServerURL(e.target.value)}
                className="outline-none border-2 px-5 py-3 w-full"
            />
            <br />
            <br />
            <button
                onClick={checkTickerServerURL}
                className="px-5 py-3 w-full border-2 bg-white"
            >
                Check
            </button>
            <br />
            <br />
            {checkURL === "failed" && (
                <div className="text-red-500">Failed to connect</div>
            )}
            {checkURL === "success" && (
                <div className="text-green-500">Connected</div>
            )}
        </div>
    );
};

export default Settings;
