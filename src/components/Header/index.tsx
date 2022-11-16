import Image from "next/image"
import Link from "next/link"
import * as Icon from "phosphor-react"
import { ButtonToggleTheme, Container } from "./styles"

export function Header() {
  return (
    <Container>
      <div>
        <Link href="/">
          <Image src="/images/header-image.png" height={36} width={36} alt="" />
        </Link>

        <nav>
          <Link href="/about">Sobre mim</Link>
          <Link href="/apps">Apps</Link>

          <ButtonToggleTheme>
            <Icon.User size={20} weight="duotone" />
          </ButtonToggleTheme>

          <ButtonToggleTheme>
            <Icon.DotsThreeOutlineVertical size={20} weight="duotone" />
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
