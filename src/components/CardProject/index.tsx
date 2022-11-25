/* eslint-disable camelcase */
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import * as Icon from "phosphor-react"
import ButtonActionCard from "../ButtonActionCard"
import { Container, IconHighlight } from "./styles"

interface CardProjectProps {
  name: string
  svn_url: string
  topics: string[]
  language: string
  created_at: Date
  description: string
}

function CardProject({
  name,
  topics,
  svn_url,
  language,
  created_at,
  description,
}: CardProjectProps) {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
        <span>
          {`Criado  ${formatDistanceToNow(new Date(created_at), {
            addSuffix: true,
            locale: ptBR,
          })}`}
        </span>
      </footer>
    </Container>
  )
}

export default CardProject
