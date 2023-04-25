import { createContext, useEffect, useState } from "react";

interface PWAProps {
    children: React.ReactNode;
}

export const PWAState = createContext({
    os: "",
    setOs: (os: string) => {},
    getMobileOperatingSystem: () => {},
});

const PWAContext: React.FC<PWAProps> = ({ children }) => {
    const [isInstalled, setIsInstalled] = useState<boolean>(false);
    const [os, setOs] = useState<string>("");

    function getMobileOperatingSystem() {
        // @ts-ignore
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }

        if (/android/i.test(userAgent)) {
            return "Android";
        }

        // @ts-ignore
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }

        return "unknown";
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.matchMedia("(display-mode: standalone)").matches) {
                // do things here
                // set a variable to be used when calling something
                // e.g. call Google Analytics to track standalone use
                setIsInstalled(true);
                console.log("PWA installed");
            } else {
                setIsInstalled(false);
                console.log("PWA not installed");
            }
            setOs(getMobileOperatingSystem());
            console.log(getMobileOperatingSystem());
        }
    }, []);

    if (process.env.NODE_ENV === "development" ? !isInstalled : isInstalled) {
        return (
            <PWAState.Provider value={{ os, setOs, getMobileOperatingSystem }}>
                {children}
            </PWAState.Provider>
        );
    } else {
        return (
            <main className="h-screen w-full flex flex-col justify-between p-5 text-center overflow-hidden">
                <span className="h-full flex-grow grid place-content-center text-center pt-32">
                    <h1 className="text-4xl font-bold text-[#1F1F75]">
                        DOJI TICKER
                    </h1>
                    <h2 className="text-lg font-semibold text-[#A9A9F2]">
                        TESTING APPLICATION
                    </h2>
                </span>
                <span className="h-full flex-grow flex justify-center flex-col">
                    <span>{`Press the share button`}</span>
                    <span>{`Select "Add to Home Screen"`}</span>
                    <span>{`Press the "Add" button`}</span>
                </span>
            </main>
        );
    }
};

export default PWAContext;
