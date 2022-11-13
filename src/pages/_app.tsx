/* eslint-disable react/no-unknown-property */
/* eslint-disable camelcase */
import { IBM_Plex_Sans } from "@next/font/google"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import { GlobalStyle } from "../css/global-styles"
import { theme } from "../css/themes/theme"

const IBM_PLEX_SANS = IBM_Plex_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        html {
          font-family: ${IBM_PLEX_SANS.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />

      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
