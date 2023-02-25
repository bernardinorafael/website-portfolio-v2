import { ButtonHTMLAttributes, useState } from 'react'

import { MoonStars, Sun } from 'phosphor-react'
import { useGlobalContext } from '../../hooks/useGlobalContext'
import { Button } from './styles'

interface ButtonToggleThemeProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function ButtonToggleTheme({ ...props }: ButtonToggleThemeProps) {
  const { toggleTheme } = useGlobalContext()
  const [toggleButtonIcon, setToggleButtonIcon] = useState(false)

  function handleToggleThemeButton() {
    setToggleButtonIcon(!toggleButtonIcon)
    toggleTheme()
  }

  return (
    <>
      <Button {...props} onClick={handleToggleThemeButton}>
        {!toggleButtonIcon ? (
          <Sun
            size={20}
            weight="regular"
            className="animate__animated animate__bounceIn animate__faster"
          />
        ) : (
          <MoonStars
            size={20}
            weight="regular"
            className="animate__animated animate__bounceIn animate__faster"
          />
        )}
        <span>Alterar tema</span>
      </Button>
    </>
  )
}

export default ButtonToggleTheme
