import * as Dialog from "@radix-ui/react-dialog"
import "animate.css"
import Link from "next/link"
import * as Icon from "phosphor-react"
import ButtonToggleTheme from "../ButtonToggleTheme"
import { DialogClose, DialogContent, DialogOverlay } from "./styles"

interface DialogMenuMobileProps {
  handleCloseDialogMenu: () => void
}

function DialogMenuMobile({ handleCloseDialogMenu }: DialogMenuMobileProps) {
  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent className="animate__animated animate__fadeInUp">
        <div>
          <strong>Menu</strong>

          <ButtonToggleTheme />

          <DialogClose>
            <Icon.X size={20} weight="bold" />
          </DialogClose>
        </div>

        <Link onClick={handleCloseDialogMenu} href="/projects">
          <Icon.Stack weight="duotone" size={28} />
          <strong>Projetos</strong>
        </Link>

        <Link onClick={handleCloseDialogMenu} href="/about">
          <Icon.IdentificationBadge weight="duotone" size={28} />
          <strong>Sobre mim</strong>
        </Link>

        <Link onClick={handleCloseDialogMenu} href="/apps">
          <Icon.Wrench weight="duotone" size={28} />
          <strong>Apps</strong>
        </Link>

        <Link onClick={handleCloseDialogMenu} href="/">
          <Icon.House weight="duotone" size={28} />
          <strong>Início</strong>
        </Link>
      </DialogContent>
    </Dialog.Portal>
  )
}

export default DialogMenuMobile
