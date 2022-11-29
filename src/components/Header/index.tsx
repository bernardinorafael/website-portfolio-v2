import * as Popover from "@radix-ui/react-popover"
import "animate.css"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import * as Icon from "phosphor-react"
import { useState } from "react"
import ButtonToggleTheme from "../ButtonToggleTheme"
import PopoverContact from "../PopoverContact"
import { ActiveLinkNavbar, Button, Container } from "./styles"

function Header() {
  const [open, setOpen] = useState<boolean>(false)
  const { asPath } = useRouter()

  function handleClosePopover() {
    setOpen(false)
  }

  return (
    <Container>
      <div>
        <Link href="/">
          <Image src="/images/header-image.png" height={28} width={28} alt="" />
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
          <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
              <Button>
                <Icon.User size={18} weight="duotone" />
              </Button>
            </Popover.Trigger>

            <PopoverContact handleClosePopover={handleClosePopover} />
          </Popover.Root>

          <ButtonToggleTheme />
        </div>
      </div>
    </Container>
  )
}

export default Header
