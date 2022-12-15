/* eslint-disable camelcase */
import * as TooltipComponent from '@radix-ui/react-tooltip'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import * as Icon from 'phosphor-react'
import ButtonActionCard from '../ButtonActionCard'
import Tooltip from '../Tooltip'
import { Container, IconHighlight } from './styles'

interface CardProjectProps {
  name: string
  svn_url: string
  topics: string[]
  language: string
  created_at: Date
  description: string
  homepage: string
}

function CardProject({
  name,
  topics,
  svn_url,
  language,
  homepage,
  created_at,
  description,
}: CardProjectProps) {
  const createdAt = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  const createdDateFormatted = format(new Date(created_at), "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  })

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>{name}</strong>
        <ButtonActionCard svnUrl={svn_url} />
      </div>

      <span>{description}</span>
      <div>
        {topics[0] ? <span>{topics[0]}</span> : null}
        {topics[1] ? <span>{topics[1]}</span> : null}
        {topics[2] ? <span>{topics[2]}</span> : null}
        {topics[3] ? <span>{topics[3]}</span> : null}
      </div>

      <footer>
        <IconHighlight variant={language}>
          <Icon.Circle weight="fill" />
          {language}
        </IconHighlight>

        <TooltipComponent.Root>
          <TooltipComponent.Trigger asChild>
            <span>{`Criado ${createdAt}`}</span>
          </TooltipComponent.Trigger>
          <Tooltip content={createdDateFormatted} />
        </TooltipComponent.Root>
      </footer>
    </Container>
  )
}

export default CardProject
