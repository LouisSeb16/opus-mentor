import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.css";
import '@/styles/utils/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
