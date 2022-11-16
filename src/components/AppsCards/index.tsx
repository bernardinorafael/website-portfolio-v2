import Image from "next/image"
import { CSSProperties } from "react"
import { Container } from "./styles"

interface AppsCardProps {
  src: string
  style: CSSProperties
  strong: string
  p?: string
}

function AppsCards({ p, src, strong, style }: AppsCardProps) {
  return (
    <Container>
      <div style={style}>
        <Image height={30} width={30} src={src} alt="" />
      </div>

      <div>
        <strong>{strong}</strong>
        <p>{p}</p>
      </div>
    </Container>
  )
}

export default AppsCards
