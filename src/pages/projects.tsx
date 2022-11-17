import Head from "next/head"
import Image from "next/image"
import * as Icon from "phosphor-react"
import Link from "next/link"
import Title from "../components/Title"
import { Container, Project } from "../css/pages/projects"

function Projects() {
  return (
    <>
      <Head>
        <title>Projetos | Rafael Bernardino</title>
      </Head>

      <Container>
        <Title>Meus projetos</Title>
        <p>
          Nesta seção temos um resumo de meus projetos armazenados e documentados <br /> no
          GitHub, passe o mouse para mais informações.
        </p>

        <section>
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
              <Link target="_blank" href="https://github.com/bernardinorafael/users-form">
                Ver no GitHub
                <Icon.ArrowUpRight weight="regular" size={12} />
              </Link>
            </div>

            <div>
              <Image height={180} width={180} src="/images/users-form-preview.png" alt="" />
            </div>

            <footer>
              <strong>N.Form</strong>
              <span>Aplicativo com foco em validação de formulários.</span>
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
              <Link target="_blank" href="https://github.com/bernardinorafael/theme-switcher">
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
        </section>
      </Container>
    </>
  )
}

export default Projects
