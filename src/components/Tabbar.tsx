import Image from "next/image";
import Settings from "../../public/assets/icon/settings.svg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Tabbar: React.FC = () => {
    const router = useRouter();

    const animate = false;

    const [show, setShow] = useState(true);

    useEffect(() => {
        if (router.pathname === "/ticker") {
            setShow(false);
        } else {
            setShow(true);
        }
    }, [router.pathname]);

    return (
        <div
            className={`z-50 fixed left-0 right-0 h-[102px] ease-in-out ${
                show ? "bottom-0" : "-bottom-28"
            } ${animate ? "transition-all duration-500" : ""}`}
        >
            <div className="flex justify-between items-center w-full px-8 pt-4">
                <div className="flex items-center space-x-12">
                    <div className="font-bold text-xl text-[#6A6AFF]">
                        Tickers
                    </div>
                    <div className="font-bold text-xl text-[#BEBEE0]">
                        Coins
                    </div>
                </div>
                <div className="bg-[#D4C7ED] rounded-full w-10 h-10 grid place-content-center">
                    <Image src={Settings} alt="Settings Icon" />
                </div>
            </div>
        </div>
    );
};

export default Tabbar;
