import { NextPage } from "next";
import ArrowLeft from "../../public/assets/icon/arrow-left.svg";
import Brush from "../../public/assets/icon/brush.svg";
import TickerModel from "../../public/assets/icon/ticker-model-1.png";
import Image from "next/image";
import { useContext, useState } from "react";
import { TickerContext } from "../contexts/TickerContext";
import { useRouter } from "next/router";
import { supportedCoins } from "../data/supportedCoins";
import { tokenNames } from "../data/tokenNames";

const Ticker: NextPage = () => {
    const router = useRouter();

    const { tickers, setTickers } = useContext(TickerContext);

    const [searchWord, setSearchWord] = useState<string>("");

    const name = tickers[0].name;

    const watchedCoins = tickers[0].watchedCoins;
    return (
        <>
            <header className="fixed z-50 top-0 left-0 right-0 px-5 pt-8 pb-6 flex justify-between items-center bg-[#F0F0F3]">
                <div
                    onClick={() => router.back()}
                    className="bg-[#DFDFE7] rounded-full grid place-content-center w-12 h-12"
                >
                    <Image
                        priority
                        loading="eager"
                        src={ArrowLeft}
                        alt="Back Icon"
                    />
                </div>
                <div className="text-center">
                    <h1 className="font-semibold text-lg text-[#4E4C70]">
                        {name}
                    </h1>
                    <p className="text-[#0B76FF] font-semibold text-sm">
                        ONLINE
                    </p>
                </div>
                <div className="bg-[#DFDFE7] rounded-full grid place-content-center w-12 h-12">
                    <Image src={Brush} alt="Customize Icon" />
                </div>
            </header>
            <div className="pt-24 px-5 space-y-3 font-sans z-20 absolute">
                <Image
                    priority
                    loading="eager"
                    src={TickerModel}
                    alt="ticker"
                />
                <div className="bg-[#CEDEF5] text-[#0B76FF] font-semibold grid place-content-center w-[5.5rem] py-1.5 text-lg rounded-2xl">
                    USDT
                </div>
                {watchedCoins.length > 0 ? (
                    <>
                        <h3 className="text-[#5F5BAF] font-sans font-semibold">
                            Watched Coins
                        </h3>
                        <div className="flex space-x-4 -mr-5 overflow-x-auto pb-2 pr-5 -ml-5 pl-5">
                            {watchedCoins.map((coin, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="bg-white h-[6.5rem] aspect-[20/26] w-max rounded-xl flex justify-between flex-col items-center p-3"
                                    >
                                        <Image
                                            src={`https://s3-symbol-logo.tradingview.com/crypto/XTVC${
                                                coin === "GRT" ? "GRAPH" : coin
                                            }--big.svg`}
                                            width={44}
                                            height={44}
                                            className="h-11 w-11 object-contain rounded-full"
                                            alt="icon"
                                        />
                                        <p className="font-semibold text-[#4e4b67]">
                                            {coin}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                ) : null}

                <h3 className="text-[#5F5BAF] font-sans font-semibold pt-2">
                    Supported Coins
                </h3>
                <div className="bg-white rounded-t-2xl p-5 min-h-[360px] pb-96">
                    {/* search box */}
                    <div className="bg-[#F2F1F9] h-14 rounded-lg relative flex items-center">
                        <div className="h-full aspect-square p-4">
                            <img
                                src="assets/icon/search.svg"
                                alt="search"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <input
                            placeholder="Bitcoin or BTC"
                            className="outline-none w-full h-full bg-transparent pr-4 placeholder:text-[#D2CFE8] text-lg font-medium text-[#4E4C70]"
                            value={searchWord}
                            onChange={(e) => setSearchWord(e.target.value)}
                        />
                    </div>

                    {/* coins list */}
                    <div className="space-y-5 pt-5">
                        {supportedCoins.map((coin, idx) => {
                            const symbol = coin.slice(0, -4);

                            const [{ name }] = tokenNames.filter((token) => {
                                if (token.symbol === symbol) {
                                    if (token.name.length > 8) {
                                        return token.name.slice(0, 8) + "...";
                                    } else return token.name;
                                } else return null;
                            });

                            if (searchWord.length > 0) {
                                if (
                                    !symbol
                                        .toLowerCase()
                                        .includes(searchWord.toLowerCase()) &&
                                    !name
                                        .toLowerCase()
                                        .includes(searchWord.toLowerCase())
                                ) {
                                    return null;
                                }
                            }

                            if (watchedCoins.includes(symbol)) {
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center">
                                            <img
                                                src={`https://s3-symbol-logo.tradingview.com/crypto/XTVC${
                                                    symbol === "GRT"
                                                        ? "GRAPH"
                                                        : symbol
                                                }--big.svg`}
                                                className="h-9 w-9 object-contain rounded-full mr-4"
                                                alt="icon"
                                            />
                                            <p className="text-[#3F3D56] font-semibold text-lg min-w-[48px]">
                                                {symbol}
                                            </p>
                                            <p className="text-[#AEABBF] font-medium ml-6">
                                                {name}
                                            </p>
                                        </div>
                                        <div
                                            onClick={() => {
                                                // setWatchedCoins(
                                                //     watchedCoins.filter(
                                                //         (coin) =>
                                                //             coin !== symbol
                                                //     )
                                                // );
                                            }}
                                            className="relative w-4 h-4 flex justify-center cursor-pointer"
                                        >
                                            <div className="bg-[#AEABBF] absolute top-[6px] left-0 right-0 h-[4px] rounded-full"></div>
                                        </div>
                                    </div>
                                );
                            } else return null;
                        })}
                        {supportedCoins.map((coin, idx) => {
                            const symbol = coin.slice(0, -4);

                            const [{ name }] = tokenNames.filter((token) => {
                                if (token.symbol === symbol) {
                                    if (token.name.length > 8) {
                                        return token.name.slice(0, 8) + "...";
                                    } else return token.name;
                                } else return null;
                            });

                            if (searchWord.length > 0) {
                                if (
                                    !symbol
                                        .toLowerCase()
                                        .includes(searchWord.toLowerCase()) &&
                                    !name
                                        .toLowerCase()
                                        .includes(searchWord.toLowerCase())
                                ) {
                                    return null;
                                }
                            }

                            if (!watchedCoins.includes(symbol)) {
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center">
                                            <img
                                                src={`https://s3-symbol-logo.tradingview.com/crypto/XTVC${
                                                    symbol === "GRT"
                                                        ? "GRAPH"
                                                        : symbol
                                                }--big.svg`}
                                                className="h-9 w-9 object-contain rounded-full mr-4"
                                                alt="icon"
                                            />
                                            <p className="text-[#3F3D56] font-semibold text-lg min-w-[48px]">
                                                {symbol}
                                            </p>
                                            <p className="text-[#AEABBF] font-medium ml-6">
                                                {name}
                                            </p>
                                        </div>

                                        <div
                                            onClick={() => {
                                                // setWatchedCoins([
                                                //     // ...watchedCoins,
                                                //     symbol,
                                                // ]);

                                                setTickers([
                                                    {
                                                        name: name,
                                                        watchedCoins: [symbol],
                                                    },
                                                ]);
                                            }}
                                            className="relative w-4 h-4 flex justify-center cursor-pointer"
                                        >
                                            <div className="bg-[#6A6AFF] absolute top-0 bottom-0 w-[4px] rounded-full"></div>
                                            <div className="bg-[#6A6AFF] absolute top-[6px] left-0 right-0 h-[4px] rounded-full"></div>
                                        </div>
                                    </div>
                                );
                            } else return null;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ticker;
