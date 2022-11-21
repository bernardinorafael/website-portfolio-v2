import { Container } from "./styles"
import * as Icon from "phosphor-react"
import Link from "next/link"

interface ButtonActionCardProps {
  svnUrl: string
}

function ButtonActionCard({ svnUrl }: ButtonActionCardProps) {
  return (
    <Container>
      <Link rel="external" target="_blank" href={svnUrl}>
        Ver no GitHub
        <Icon.Link weight="fill" />
      </Link>
    </Container>
  )
}

export default ButtonActionCard
