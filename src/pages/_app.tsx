import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/utils/global.scss";
import PageLoadingProgressIndicator from "@/components/shared/nprogress";
import TawkToWidget from "@/sdk/utils/tawk.to";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageLoadingProgressIndicator>
        <Component {...pageProps} />
        <TawkToWidget/>
      </PageLoadingProgressIndicator>
    </>
  );
}
