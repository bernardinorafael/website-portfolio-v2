import Head from "next/head"
import * as Icon from "phosphor-react"
import LikeCard from "../components/LikeCards"
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  Container,
  LikeCardContainer,
} from "../css/pages/about"

function About() {
  return (
    <>
      <Head>
        <title>Sobre mim | Rafael Bernardino</title>
      </Head>

      <Container>
        <AccordionRoot defaultValue="about" type="single" collapsible>
          <AccordionItem value="about">
            <AccordionTrigger>
              Sobre mim
              <Icon.CaretRight size={20} />
            </AccordionTrigger>

            <AccordionContent>
              <div>
                Após terminar o ensino médio, iniciei meus estudos em Design de Moda, é um
                segmento de grande empregabilidade na minha região de nascimento, após um ano
                de faculdade, e a chegada da pandemia, com ela vários questionamentos sobre a
                carreira profissional, decidi analisar o cenário cautelosamente, e então entrar
                para a bolha. Pesquisei muito para entender em qual área de tecnologia eu me
                encaixaria. Nas horas vagas, gosto de tomar café e passar tempo com as pessoas
                especiais da minha vida, esporadicamente gosto de ler um bom livro de ficção
                científica e conhecer lugares novos.
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="work">
            <AccordionTrigger>
              Trabalho
              <Icon.CaretRight size={20} />
            </AccordionTrigger>

            <AccordionContent>
              <div>
                Dentre minhas experiências profissionais, destaco o transporte, onde trabalhei
                por quatro anos, foi o local que aprendi lições valiosas sobre a operação de
                uma empresa de grande porte. Exerci atividades administrativas em todos os
                setores da empresa, meu foco era aprender todo o fluxo operacional e assim ter
                uma visão objetiva para exercer meu papel o mais performático possível. Após
                minha chegada ao Ceará, trabalhei em uma softhouse, onde também tive ótimas
                lições sobre como uma empresa tech opera. Atualmente focando no meu
                aprimoramento profissional, de onde venho criando projetos pessoais.
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="like">
            <AccordionTrigger>
              😁
              <Icon.CaretRight size={20} />
            </AccordionTrigger>

            <AccordionContent>
              <LikeCardContainer>
                <LikeCard variant="green">Marvel</LikeCard>
                <LikeCard variant="green">React</LikeCard>
                <LikeCard variant="green">Bons filmes</LikeCard>
                <LikeCard variant="green">Counter-strike</LikeCard>
                <LikeCard variant="green">Codar</LikeCard>
                <LikeCard variant="green">Inglês</LikeCard>
                <LikeCard variant="green">Pôr do sol</LikeCard>
                <LikeCard variant="green">Omni</LikeCard>
                <LikeCard variant="green">Café</LikeCard>
                <LikeCard variant="green">Twitch</LikeCard>
                <LikeCard variant="green">Cor preto</LikeCard>
              </LikeCardContainer>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="unlike">
            <AccordionTrigger>
              😫
              <Icon.CaretRight size={20} />
            </AccordionTrigger>

            <AccordionContent>
              <LikeCardContainer>
                <LikeCard variant="red">Política</LikeCard>
                <LikeCard variant="red">Tema light</LikeCard>
                <LikeCard variant="red">Desorganização</LikeCard>
                <LikeCard variant="red">Engarrafamento</LikeCard>
                <LikeCard variant="red">Filmes de romance</LikeCard>
                <LikeCard variant="red">Multidão</LikeCard>
                <LikeCard variant="red">Espinafre</LikeCard>
                <LikeCard variant="red">Carne bem passada</LikeCard>
                <LikeCard variant="red">Refrigerante</LikeCard>
              </LikeCardContainer>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </Container>
    </>
  )
}

export default About
