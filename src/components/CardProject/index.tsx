/* eslint-disable camelcase */
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import * as Icon from "phosphor-react"
import ButtonActionCard from "../ButtonActionCard"
import { Container } from "./styles"

interface CardProjectProps {
  name: string
  topics: string[]
  language: string
  updated_at: Date
  description: string
  svn_url: string
}

function CardProject({
  name,
  topics,
  svn_url,
  language,
  updated_at,
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
        <span>
          <Icon.Stack weight="fill" />
          {language}
        </span>
        <span>
          {`Atualizado  ${formatDistanceToNow(new Date(updated_at), {
            addSuffix: true,
            locale: ptBR,
          })}`}
        </span>
      </footer>
    </Container>
  )
}

export default CardProject
