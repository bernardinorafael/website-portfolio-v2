import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../css/themes/theme'

interface GlobalContextProps {
  toggleTheme: () => void
}

export const GlobalContext = createContext<GlobalContextProps | null>(null)

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(dark)

  function toggleTheme() {
    setTheme(theme.name === 'dark' ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalContext.Provider value={{ toggleTheme }}>
        {children}
      </GlobalContext.Provider>
    </ThemeProvider>
  )
}
