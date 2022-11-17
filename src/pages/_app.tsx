import type { AppProps } from "next/app"
import Header from "../components/Header"
import HeaderResponsive from "../components/HeaderResponsive"
import GlobalProvider from "../context/GlobalContext"
import { GlobalStyle } from "../css/global-styles"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <GlobalStyle />

      <Header />
      <HeaderResponsive />
      <Component {...pageProps} />
    </GlobalProvider>
  )
}
