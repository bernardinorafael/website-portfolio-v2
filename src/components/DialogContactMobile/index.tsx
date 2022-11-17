import * as Dialog from "@radix-ui/react-dialog"
import * as Icon from "phosphor-react"
import { DialogClose, DialogContent, DialogOverlay, ItemContact } from "./styles"
import "animate.css"
import Link from "next/link"

function DialogContactMobile() {
  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent className="animate__animated animate__fadeInUp">
        <div>
          <strong>Contato</strong>

          <DialogClose>
            <Icon.X size={20} weight="bold" />
          </DialogClose>
        </div>

        <Link target="_blank" href="https://github.com/bernardinorafael">
          <ItemContact>
            <div>
              <Icon.GithubLogo weight="duotone" size={28} />
              <div>
                <strong>
                  GitHub
                  <Icon.ArrowUpRight weight="thin" size={16} />
                </strong>
                <p>Acompanhe meus projetos diretamente no GitHub.</p>
              </div>
            </div>
          </ItemContact>
        </Link>

        <Link target="_blank" href="https://www.linkedin.com/in/eurafaelbernardino/">
          <ItemContact>
            <div>
              <Icon.LinkedinLogo weight="duotone" size={28} />
              <div>
                <strong>
                  LinkedIn
                  <Icon.ArrowUpRight weight="thin" size={16} />
                </strong>
                <p>Conecte-se profissionalmente comigo no LinkedIn.</p>
              </div>
            </div>
          </ItemContact>
        </Link>

        <Link target="_blank" href="https://twitter.com/orafabernardino">
          <ItemContact>
            <div>
              <Icon.TwitterLogo weight="duotone" size={28} />
              <div>
                <strong>
                  Twitter
                  <Icon.ArrowUpRight weight="thin" size={16} />
                </strong>
                <p>Encontre-me na rede social do passarinho.</p>
              </div>
            </div>
          </ItemContact>
        </Link>
      </DialogContent>
    </Dialog.Portal>
  )
}

export default DialogContactMobile