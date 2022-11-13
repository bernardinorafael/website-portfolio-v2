import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import { GlobalStyle } from "../css/global-styles"
import { theme } from "../css/themes/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeProvider>
  )
}
