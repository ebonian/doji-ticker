import type { NextPage } from "next";
import { useContext, useState } from "react";
import { TickerContext } from "../contexts/TickerContext";
import TickerBlock from "../components/TickerBlock";
import { getPropertyValue } from "../libs/ctrl/control";

const Home: NextPage = () => {
    const { tickers } = useContext(TickerContext);

    const [showProvisionModal, setShowProvisionModal] = useState(false);

    const [error, setError] = useState(false);

    const [connectErrorMessage, setConnectErrorMessage] = useState("");

    return (
        <>
            {showProvisionModal ? (
                <>
                    <div className="fixed z-[60] top-0 left-0 right-0 bottom-0">
                        <div className="grid place-content-center w-full h-full relative">
                            <div className="z-50 text-center w-72 bg-[#F0F0F3] rounded-2xl py-6 px-5 space-y-6">
                                <p className="font-semibold text-[#6B6B90]">
                                    {
                                        "To add a new ticker device to your account, you will have to connect to the Ticker's wifi by type in your Ticker's ID below"
                                    }
                                </p>
                                <input
                                    placeholder="e.g. 4fcdcc"
                                    className="outline-none w-full bg-transparent border-2 border-[#6B6B90] border-opacity-30 rounded-md px-4 py-2"
                                />
                                <div
                                    onClick={() =>
                                        setConnectErrorMessage(
                                            "Ticker Not Found"
                                        )
                                    }
                                    className="w-full text-center py-2.5 cursor-pointer rounded-md bg-[#6A6AFF] bg-opacity-20 text-[#6A6AFF] font-bold"
                                >
                                    Connect
                                </div>
                                {connectErrorMessage && (
                                    <p className="text-[#FF0000] text-xs font-semibold">
                                        {connectErrorMessage}
                                    </p>
                                )}
                            </div>
                            <div
                                onClick={() => {
                                    setShowProvisionModal(false);
                                    setConnectErrorMessage("");
                                }}
                                className="absolute opacity-30 left-0 right-0 top-0 bottom-0 bg-black"
                            ></div>
                        </div>
                    </div>
                </>
            ) : (
                <div></div>
            )}
            <header className="fixed z-50 top-0 left-0 right-0 px-5 pt-8 pb-6 flex justify-between items-center bg-[#F0F0F3]">
                <h1 className="font-bold text-2xl text-[#6C6C97] text-left">
                    Your Tickers
                </h1>
                <div>
                    <div
                        onClick={() => setShowProvisionModal(true)}
                        className="bg-[#D5D5F5] rounded-full py-1.5 px-4 flex items-center space-x-2 cursor-pointer"
                    >
                        <div className="relative w-5 h-5 flex justify-center">
                            <div className="bg-[#6A6AFF] absolute top-0 bottom-0 w-[5px] rounded-full"></div>
                            <div className="bg-[#6A6AFF] absolute top-[7px] left-0 right-0 h-[5px] rounded-full"></div>
                        </div>
                        <div className="font-semibold text-lg text-[#6A6AFF]">
                            New
                        </div>
                    </div>
                </div>
            </header>
            <div className="w-full min-h-screen pt-24 px-5 space-y-5 absolute z-20">
                <h3 className="text-[#B5B4D0] font-sans font-medium">
                    All Devices
                </h3>
                <div className="space-y-8 pb-8">
                    {tickers.map((ticker) => (
                        <TickerBlock
                            key={ticker.name}
                            name={ticker.name}
                            watchedCoins={ticker.watchedCoins}
                            online
                            battery={100}
                        />
                    ))}
                </div>
                <button
                    onClick={async () => {
                        await getPropertyValue(2)
                            .then(() => setError(false))
                            .catch(() => setError(true));
                    }}
                >
                    click me
                </button>
                <br />
                <br />
                {error && "error"}
            </div>
        </>
    );
};

export default Home;
