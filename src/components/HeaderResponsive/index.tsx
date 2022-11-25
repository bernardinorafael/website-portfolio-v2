import * as Dialog from "@radix-ui/react-dialog"
import * as Icon from "phosphor-react"
import { useState } from "react"
import DialogContactMobile from "../DialogContactMobile"
import DialogMenuMobile from "../DialogMenuMobile"
import { Container, DialogTrigger } from "./styles"

function HeaderResponsive() {
  const [openDialogMenu, setOpenDialogMenu] = useState<boolean>(false)
  const [openDialogContact, setOpenDialogContact] = useState<boolean>(false)

  function handleCloseDialogMenu() {
    setOpenDialogMenu(false)
  }

  function handleCloseDialogContact() {
    setOpenDialogContact(false)
  }

  return (
    <Container>
      <section>
        <Dialog.Root open={openDialogMenu} onOpenChange={setOpenDialogMenu}>
          <DialogTrigger>
            Menu
            <Icon.List size={20} weight="duotone" />
          </DialogTrigger>

          <DialogMenuMobile handleCloseDialogMenu={handleCloseDialogMenu} />
        </Dialog.Root>

        <Dialog.Root open={openDialogContact} onOpenChange={setOpenDialogContact}>
          <DialogTrigger>
            Contato
            <Icon.User size={20} weight="duotone" />
          </DialogTrigger>

          <DialogContactMobile handleCloseDialogContact={handleCloseDialogContact} />
        </Dialog.Root>
      </section>
    </Container>
  )
}

export default HeaderResponsive
