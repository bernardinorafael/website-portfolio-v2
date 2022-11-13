import Head from "next/head"
import Image from "next/image"
import * as Icon from "phosphor-react"
import Link from "next/link"
import Title from "../components/Title"
import { Container, Project, ProjectsContainer } from "../css/pages/home"

function Home() {
  return (
    <>
      <Head>
        <title>Home | Rafael Bernardino</title>
      </Head>

      <Container>
        <section>
          <Title>Hello, I&apos;m Rafael 👋</Title>

          <p>
            Desenvolvedor web, nascido em Criciúma, Santa Catarina, região sul do país
            <br />e atualmente morando em Sobral, Ceará. Meu contato com a tecnologia veio
            desde cedo, minha família sempre foi envolvida com a informática. Já estive na área
            têxtil, um segmento onde a indústria é bem estabelecida em Santa Catarina, porém no
            decorrer do tempo, me reencontrei na área da tecnologia.
          </p>
        </section>

        <section>
          <Title>Meus projetos</Title>

          <ProjectsContainer>
            <Project>
              <div>
                <Image height={180} width={180} src="/images/mockflow.png" alt="" />
              </div>

              <footer>
                <strong>Shopping</strong>

                <div>
                  <span>TypeScript</span>
                  <span>Next.js</span>
                </div>
              </footer>
            </Project>
            <Project>
              <div>
                <Image height={180} width={180} src="/images/mockflow.png" alt="" />
              </div>

              <footer>
                <strong>Shopping</strong>

                <div>
                  <span>TypeScript</span>
                  <span>Next.js</span>
                </div>
              </footer>
            </Project>
            <Project>
              <div>
                <Image height={180} width={180} src="/images/mockflow.png" alt="" />
              </div>

              <footer>
                <strong>Shopping</strong>

                <div>
                  <span>TypeScript</span>
                  <span>Next.js</span>
                </div>
              </footer>
            </Project>
          </ProjectsContainer>

          <Link href="#">
            Ver mais projetos
            <Icon.ArrowRight />
          </Link>
        </section>
      </Container>
    </>
  )
}

export default Home
