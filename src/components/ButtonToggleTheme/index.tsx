import { ButtonHTMLAttributes, useContext, useState } from "react"
import * as Icon from "phosphor-react"
import { Button } from "./styles"
import { GlobalContext } from "../../context/GlobalContext"

interface ButtonToggleThemeProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

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
          <Icon.Sun
            className="animate__animated animate__bounceIn animate__faster"
            size={18}
            weight="duotone"
          />
        ) : (
          <Icon.MoonStars
            className="animate__animated animate__bounceIn animate__faster"
            size={18}
            weight="duotone"
          />
        )}
        <span>Alterar tema</span>
      </Button>
    </>
  )
}

export default ButtonToggleTheme
