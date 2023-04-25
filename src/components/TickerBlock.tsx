import Image from "next/image";
import Link from "next/link";

interface TickerBlockProps {
    name: string;
    watchedCoins?: string[];
    online?: boolean;
    battery?: number;
}

const TickerBlock: React.FC<TickerBlockProps> = ({
    name,
    watchedCoins,
    online = false,
    battery = 0,
}) => {
    return (
        <Link href="/ticker">
            <a
                className="rounded-2xl overflow-hidden flex flex-col w-full h-32 font-sans"
                style={{
                    boxShadow:
                        "0px 8px 16px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.04)",
                }}
            >
                <div className="h-[55%] flex flex-grow justify-between items-center px-6 w-full bg-white">
                    <div>
                        <h4 className="font-semibold text-lg text-[#4E4C70] -mb-1.5">
                            {name}
                        </h4>
                        <p className="text-[#0B76FF] font-semibold">
                            {online ? "ONLINE" : "OFFLINE"}
                        </p>
                    </div>
                    <div>
                        <p className="text-[#0B76FF] font-bold text-2xl">
                            {battery}%
                        </p>
                    </div>
                </div>
                <div className="h-[45%] flex flex-grow items-center px-4 w-full bg-[#f2f1f9] space-x-3">
                    {watchedCoins?.map((coin, idx) => {
                        return (
                            <div key={idx}>
                                <Image
                                    src={`https://s3-symbol-logo.tradingview.com/crypto/XTVC${
                                        coin === "GRT" ? "GRAPH" : coin
                                    }--big.svg`}
                                    className="h-9 w-9 object-contain rounded-full grayscale opacity-50"
                                    alt="icon"
                                    height={36}
                                    width={36}
                                />
                            </div>
                        );
                    })}
                </div>
            </a>
        </Link>
    );
};

export default TickerBlock;
