import * as Popover from "@radix-ui/react-popover"
import "animate.css"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import * as Icon from "phosphor-react"
import ButtonToggleTheme from "../ButtonToggleTheme"
import PopoverContact from "../PopoverContact"
import { ActiveLinkNavbar, Button, Container } from "./styles"

export function Header() {
  const { asPath } = useRouter()

  return (
    <Container>
      <div>
        <Link href="/">
          <Image src="/images/header-image.png" height={36} width={36} alt="" />
        </Link>

        <nav>
          <Link href="/about" legacyBehavior passHref>
            <ActiveLinkNavbar asPath={asPath}>Sobre mim</ActiveLinkNavbar>
          </Link>
          <Link href="/apps" legacyBehavior passHref>
            <ActiveLinkNavbar asPath={asPath}>Apps</ActiveLinkNavbar>
          </Link>
          <Link href="/projects" legacyBehavior passHref>
            <ActiveLinkNavbar asPath={asPath}>Projetos</ActiveLinkNavbar>
          </Link>
        </nav>

        <div>
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button>
                <Icon.User size={20} weight="duotone" />
              </Button>
            </Popover.Trigger>

            <PopoverContact />
          </Popover.Root>

          <ButtonToggleTheme />
        </div>
      </div>
    </Container>
  )
}

export default Header
