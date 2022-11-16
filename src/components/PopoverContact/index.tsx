import * as Popover from "@radix-ui/react-popover"
import { ItemPopover, PopoverContent } from "./styles"
import * as Icon from "phosphor-react"
import Link from "next/link"

function PopoverContact() {
  return (
    <Popover.Portal>
      <PopoverContent alignOffset={-30} align="start" sideOffset={8}>
        <section>
          <Link href="https://github.com/bernardinorafael">
            <ItemPopover>
              <Icon.GithubLogo weight="duotone" size={28} />
              <div>
                <strong>GitHub</strong>
                <p>Acompanhe meus projetos diretamente no GitHub</p>
              </div>
            </ItemPopover>
          </Link>

          <Link href="https://www.linkedin.com/in/eurafaelbernardino/">
            <ItemPopover>
              <Icon.LinkedinLogo weight="duotone" size={28} />
              <div>
                <strong>LinkedIn</strong>
                <p>Conecte-se profissionalmente comigo no LinkedIn</p>
              </div>
            </ItemPopover>
          </Link>

          <Link href="https://twitter.com/orafabernardino">
            <ItemPopover>
              <Icon.TwitterLogo weight="duotone" size={28} />
              <div>
                <strong>Twitter</strong>
                <p>Encontre-me na rede social do passarinho</p>
              </div>
            </ItemPopover>
          </Link>
        </section>
      </PopoverContent>
    </Popover.Portal>
  )
}

export default PopoverContact
