import { Container } from "./styles"
import * as Icon from "phosphor-react"

function HeaderResponsive() {
  return (
    <Container>
      <section>
        <button>
          Menu
          <Icon.List size={20} weight="duotone" />
        </button>
        <button>
          Contato
          <Icon.User size={20} weight="duotone" />
        </button>
      </section>
    </Container>
  )
}

export default HeaderResponsive
