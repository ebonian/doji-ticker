import type { NextPage } from "next";
import { useContext, useState } from "react";
import { TickerContext } from "../contexts/TickerContext";
import TickerBlock from "../components/TickerBlock";

const Home: NextPage = () => {
    const { tickers } = useContext(TickerContext);

    const [showProvisionModal, setShowProvisionModal] = useState(false);

    return (
        <>
            <header className="fixed z-50 top-0 left-0 right-0 px-5 pt-8 pb-6 flex justify-between items-center bg-[#F0F0F3]">
                <h1 className="font-bold text-2xl text-[#6C6C97] text-left">
                    Your Tickers
                </h1>
                <div>
                    <div className="bg-[#D5D5F5] rounded-full py-1.5 px-4 flex items-center space-x-2 cursor-pointer">
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
            </div>
        </>
    );
};

export default Home;
