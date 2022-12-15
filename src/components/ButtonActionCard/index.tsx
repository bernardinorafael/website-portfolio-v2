import Link from 'next/link'
import { GithubLogo } from 'phosphor-react'
import { Container } from './styles'
import * as TooltipComponent from '@radix-ui/react-tooltip'
import Tooltip from '../Tooltip'

type ButtonActionCardProps = {
  svnUrl: string
}

function ButtonActionCard({ svnUrl }: ButtonActionCardProps) {
  return (
    <Container>
      <TooltipComponent.Root>
        <TooltipComponent.Trigger asChild>
          <Link rel="external" target="_blank" href={svnUrl}>
            <GithubLogo size={20} weight="fill" />
          </Link>
        </TooltipComponent.Trigger>

        <Tooltip content="Acessar GitHub" />
      </TooltipComponent.Root>
    </Container>
  )
}

export default ButtonActionCard
