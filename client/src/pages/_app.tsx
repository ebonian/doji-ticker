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
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
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
