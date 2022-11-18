import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "phosphor-react"
import Title from "../components/Title"
import { Container, Project, ProjectsContainer } from "../css/pages/home"

function Home() {
  return (
    <>
      <Head>
        <title>Início | Rafael Bernardino</title>
      </Head>

      <Container>
        <section>
          <Title>Hello, I&apos;m Rafael</Title>

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
                <Link target="_blank" href="https://github.com/bernardinorafael/todo-advanced">
                  Ver no GitHub
                  <Icon.ArrowUpRight weight="regular" size={12} />
                </Link>
                <Link target="_blank" href="https://todo-advanced-bernardino.vercel.app/">
                  Confira o projeto online
                  <Icon.ArrowUpRight weight="regular" size={12} />
                </Link>
              </div>

              <div>
                <Image height={180} width={180} src="/images/todo-preview.png" alt="" />
              </div>

              <footer>
                <strong>Lista de tarefas</strong>
                <span>App com função de CRUD, pode-se criar, excluir e editar um item.</span>
              </footer>
            </Project>

            <Project>
              <div>
                <Link target="_blank" href="https://github.com/bernardinorafael/shopping">
                  Ver no GitHub
                  <Icon.ArrowUpRight weight="regular" size={12} />
                </Link>
              </div>

              <div>
                <Image height={180} width={180} src="/images/shopping-preview.png" alt="" />
              </div>

              <footer>
                <strong>Shopping</strong>
                <span>Mini shopping com sistema de pagamento integrado.</span>
              </footer>
            </Project>

            <Project>
              <div>
                <Link
                  target="_blank"
                  href="https://github.com/bernardinorafael/theme-switcher"
                >
                  Ver no GitHub
                  <Icon.ArrowUpRight weight="regular" size={12} />
                </Link>

                <Link target="_blank" href="https://theme-switcher-one.vercel.app/">
                  Confira o projeto online
                  <Icon.ArrowUpRight weight="regular" size={12} />
                </Link>
              </div>

              <div>
                <Image
                  height={180}
                  width={180}
                  src="/images/theme-switcher-preview.png"
                  alt=""
                />
              </div>

              <footer>
                <strong>Theme switcher</strong>
                <span>App que armazena o tema escolhido em localStorage</span>
              </footer>
            </Project>
          </ProjectsContainer>
          <Link href="/projects">
            Ver mais projetos
            <Icon.ArrowRight />
          </Link>
        </section>
      </Container>
    </>
  )
}

export default Home
