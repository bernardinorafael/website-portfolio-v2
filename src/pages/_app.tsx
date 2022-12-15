import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import HeaderResponsive from '../components/HeaderResponsive'
import GlobalProvider from '../context/GlobalContext'
import * as Tooltip from '@radix-ui/react-tooltip'
import { GlobalStyle } from '../css/global-styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <GlobalProvider>
        <GlobalStyle />

        <Header />
        <HeaderResponsive />

        <Component {...pageProps} />

        <Analytics />
      </GlobalProvider>
    </Tooltip.Provider>
  )
}
