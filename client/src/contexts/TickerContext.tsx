import { createContext, useEffect, useState } from "react";
import { sendTickerServer } from "../libs/transport";

export const TickerContext = createContext({
    tickers: [
        {
            name: "",
            watchedCoins: ["BTC"],
        },
    ],
    setTickers: (tickers: any) => {},
    tickerServerURL: "",
    setTickerServerURL: (tickerServerURL: string) => {},
});

const TickerProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    // varables
    const [tickers, setTickers] = useState<
        {
            name: string;
            watchedCoins: string[];
        }[]
    >([
        {
            name: "Ticker 4FCDCC",
            watchedCoins: ["BTC"],
        },
    ]);

    const [tickerServerURL, setTickerServerURL] = useState<string>("");

    // effects
    useEffect(() => {
        const tickers = localStorage.getItem("tickers");
        if (tickers) {
            setTickers(JSON.parse(tickers));
        }

        const tickerServerURL = localStorage.getItem("tickerServerURL");
        if (tickerServerURL) {
            setTickerServerURL(tickerServerURL);
        }

        sendTickerServer(tickerServerURL + "set-prop-value", {
            indice: 2,
            value: "binance",
        });
        sendTickerServer(tickerServerURL + "set-prop-value", {
            indice: 4,
            value: "usdt",
        });
    }, []);

    useEffect(() => {
        localStorage.setItem("tickers", JSON.stringify(tickers));
    }, [tickers]);

    useEffect(() => {
        localStorage.setItem("tickerServerURL", tickerServerURL);
    }, [tickerServerURL]);

    return (
        <TickerContext.Provider
            value={{ tickers, setTickers, tickerServerURL, setTickerServerURL }}
        >
            {children}
        </TickerContext.Provider>
    );
};

export default TickerProvider;
