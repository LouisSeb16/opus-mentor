import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/utils/global.scss";
import PageLoadingProgressIndicator from "@/components/shared/nprogress";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageLoadingProgressIndicator>
        <Component {...pageProps} />
      </PageLoadingProgressIndicator>
    </>
  );
}
