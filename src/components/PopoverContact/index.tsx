import * as Popover from "@radix-ui/react-popover"
import { ItemPopover, PopoverContent } from "./styles"
import * as Icon from "phosphor-react"
import Link from "next/link"

interface PopoverContactProps {
  handleClosePopover: () => void
}

function PopoverContact({ handleClosePopover }: PopoverContactProps) {
  return (
    <Popover.Portal>
      <PopoverContent alignOffset={-30} align="end" sideOffset={2}>
        <section>
          <Link
            onClick={handleClosePopover}
            target="_blank"
            href="https://github.com/bernardinorafael"
          >
            <ItemPopover>
              <Icon.GithubLogo weight="duotone" size={24} />
              <div>
                <strong>
                  GitHub
                  <Icon.ArrowUpRight weight="regular" size={14} />
                </strong>
                <p>Acompanhe meus projetos diretamente no GitHub.</p>
              </div>
            </ItemPopover>
          </Link>

          <Link
            onClick={handleClosePopover}
            target="_blank"
            href="https://www.linkedin.com/in/eurafaelbernardino/"
          >
            <ItemPopover>
              <Icon.LinkedinLogo weight="duotone" size={24} />
              <div>
                <strong>
                  LinkedIn
                  <Icon.ArrowUpRight weight="regular" size={14} />
                </strong>
                <p>Conecte-se profissionalmente comigo no LinkedIn.</p>
              </div>
            </ItemPopover>
          </Link>

          <Link
            onClick={handleClosePopover}
            target="_blank"
            href="https://twitter.com/orafabernardino"
          >
            <ItemPopover>
              <Icon.TwitterLogo weight="duotone" size={24} />
              <div>
                <strong>
                  Twitter
                  <Icon.ArrowUpRight weight="regular" size={14} />
                </strong>
                <p>Encontre-me na rede social do passarinho.</p>
              </div>
            </ItemPopover>
          </Link>
        </section>
      </PopoverContent>
    </Popover.Portal>
  )
}

export default PopoverContact
