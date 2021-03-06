import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "simple-keyboard/build/css/index.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
