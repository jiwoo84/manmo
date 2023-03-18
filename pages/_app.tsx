import Top from "@/src/component/Top";
import Footer from "@/src/component/Footer";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Top />
      <RecoilRoot>
        <Component {...pageProps} />;
      </RecoilRoot>
      <Footer />
    </>
  );
}
