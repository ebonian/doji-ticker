import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import PWAContext from "../contexts/PWAContext";
import Background from "../components/Background";
import TickerProvider from "../contexts/TickerContext";
import Tabbar from "../components/Tabbar";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <Head>
                <title>Doji Ticker</title>
            </Head>

            <PWAContext>
                <TickerProvider>
                    <Component {...pageProps} />
                    <Tabbar />
                    <Background />
                </TickerProvider>
            </PWAContext>
        </>
    );
}

export default MyApp;
