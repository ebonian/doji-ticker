import { createContext, useState } from "react";

export const TickerContext = createContext({
    tickers: [
        {
            name: "",
            watchedCoins: ["BTC"],
        },
    ],
    setTickers: (tickers: any) => {},
});

const TickerProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
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

    console.log(tickers);

    return (
        <TickerContext.Provider value={{ tickers, setTickers }}>
            {children}
        </TickerContext.Provider>
    );
};

export default TickerProvider;
