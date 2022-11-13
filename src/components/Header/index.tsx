import Image from "next/image"
import { ButtonToggleTheme, Container } from "./styles"
import * as Icon from "phosphor-react"
import Link from "next/link"

export function Header() {
  return (
    <Container>
      <div>
        <Image src="/images/imagem-main-perfil.png" height={36} width={36} alt="" />

        <nav>
          <Link href="#">Sobre mim</Link>
          <Link href="#">Apps</Link>

          <ButtonToggleTheme>
            <Icon.User size={20} weight="duotone" />
          </ButtonToggleTheme>
        </nav>

        <ButtonToggleTheme>
          <Icon.Sun size={20} weight="duotone" />
        </ButtonToggleTheme>
      </div>
    </Container>
  )
}

export default Header
