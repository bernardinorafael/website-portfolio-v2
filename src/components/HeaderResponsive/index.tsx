import * as Dialog from "@radix-ui/react-dialog"
import * as Icon from "phosphor-react"
import DialogContactMobile from "../DialogContactMobile"
import DialogMenuMobile from "../DialogMenuMobile"
import { Container, DialogTrigger } from "./styles"

function HeaderResponsive() {
  return (
    <Container>
      <section>
        <Dialog.Root>
          <DialogTrigger>
            Menu
            <Icon.List size={20} weight="duotone" />
          </DialogTrigger>

          <DialogMenuMobile />
        </Dialog.Root>

        <Dialog.Root>
          <DialogTrigger>
            Contato
            <Icon.User size={20} weight="duotone" />
          </DialogTrigger>

          <DialogContactMobile />
        </Dialog.Root>
      </section>
    </Container>
  )
}

export default HeaderResponsive
