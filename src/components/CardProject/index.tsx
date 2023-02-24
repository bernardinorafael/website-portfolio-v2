/* eslint-disable camelcase */
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Circle } from 'phosphor-react'
import Tooltip from '../../primitives/Tooltip'
import ButtonActionCard from '../ButtonActionCard'
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

export default function CardProject(props: CardProjectProps) {
  const createdAt = formatDistanceToNow(new Date(props.created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  const createdDateFormatted = format(
    new Date(props.created_at),
    "d 'de' LLLL 'às' HH:mm",
    { locale: ptBR },
  )

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>{props.name}</strong>
        <ButtonActionCard
          hasLink={!!props.homepage}
          homepage={props.homepage}
          svnUrl={props.svn_url}
        />
      </div>

      <span>{props.description}</span>
      <div>
        {props.topics[0] ? <span>{props.topics[0]}</span> : null}
        {props.topics[1] ? <span>{props.topics[1]}</span> : null}
        {props.topics[2] ? <span>{props.topics[2]}</span> : null}
        {props.topics[3] ? <span>{props.topics[3]}</span> : null}
      </div>

      <footer>
        <IconHighlight variant={props.language}>
          <Circle weight="fill" />
          {props.language}
        </IconHighlight>

        <Tooltip render={createdDateFormatted}>
          <span>{`Criado ${createdAt}`}</span>
        </Tooltip>
      </footer>
    </Container>
  )
}
