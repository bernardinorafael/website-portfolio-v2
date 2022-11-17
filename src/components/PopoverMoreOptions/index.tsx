import * as Popover from "@radix-ui/react-popover"
import Link from "next/link"
import * as Icon from "phosphor-react"
import { ItemPopover, PopoverContent } from "./styles"

function PopoverMoreOptions() {
  return (
    <Popover.Portal>
      <PopoverContent align="start" sideOffset={8}>
        <section>
          <ItemPopover disabledContent>
            <Icon.ChatCircleDots mirrored weight="duotone" size={28} />

            <div>
              <strong>
                Blog
                <span>Em breve</span>
              </strong>

              <p>Acompanhe as postagens do meu blog pessoal.</p>
            </div>
          </ItemPopover>

          <Link href="/projects">
            <ItemPopover>
              <Icon.Stack weight="duotone" size={28} />
              <div>
                <strong>Projetos</strong>
                <p>Veja a página de projetos.</p>
              </div>
            </ItemPopover>
          </Link>
        </section>
      </PopoverContent>
    </Popover.Portal>
  )
}

export default PopoverMoreOptions
