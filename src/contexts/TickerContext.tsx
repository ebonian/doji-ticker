import { createContext, useEffect, useState } from "react";

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
    }, []);

    useEffect(() => {
        localStorage.setItem("tickers", JSON.stringify(tickers));
    }, [tickers]);

    return (
        <TickerContext.Provider
            value={{ tickers, setTickers, tickerServerURL, setTickerServerURL }}
        >
            {children}
        </TickerContext.Provider>
    );
};

export default TickerProvider;
