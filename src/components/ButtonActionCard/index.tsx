import Link from 'next/link'
import { GithubLogo, LinkSimple } from 'phosphor-react'
import Tooltip from '../../primitives/Tooltip'
import { Container } from './styles'

type ButtonActionCardProps = {
  svnUrl: string
  hasLink?: boolean
  homepage?: string
}

export default function ButtonActionCard(props: ButtonActionCardProps) {
  return (
    <Container>
      <Tooltip render="Ver no GitHub">
        <Link rel="external" target="_blank" href={props.svnUrl}>
          <GithubLogo size={20} weight="fill" />
        </Link>
      </Tooltip>

      {props.hasLink && (
        <Tooltip render="Ver online">
          <Link rel="external" target="_blank" href={String(props.homepage)}>
            <LinkSimple size={20} weight="fill" />
          </Link>
        </Tooltip>
      )}
    </Container>
  )
}
