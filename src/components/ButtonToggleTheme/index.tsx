import { ButtonHTMLAttributes, useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

import { MoonStars, Sun } from 'phosphor-react'
import { Button } from './styles'

interface ButtonToggleThemeProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

function ButtonToggleTheme({ ...props }: ButtonToggleThemeProps) {
  const { toggleTheme } = useContext(GlobalContext)
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
            size={16}
            weight="regular"
            className="animate__animated animate__bounceIn animate__faster"
          />
        ) : (
          <MoonStars
            size={16}
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
