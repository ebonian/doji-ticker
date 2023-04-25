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
      <main className="bg-white h-screen w-full flex flex-col justify-between p-5 text-center overflow-hidden">
        <span className="h-full"></span>
        <span className="h-full flex flex-col justify-center">
          <span className="text-5xl">🤔</span>
          <br />
          <span className="font-semibold text-lg">
            {`Seems like you haven't`}
            <br /> install the app yet.
          </span>
        </span>
        <span className="h-full flex justify-end flex-col">
          <span>{`Press the share button`}</span>
          <span>{`Select "Add to Home Screen"`}</span>
          <span>{`Press the "Add" button`}</span>
        </span>
        <span className="h-full"></span>
      </main>
    );
  }
};

export default PWAContext;
