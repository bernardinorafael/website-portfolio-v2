import Head from "next/head"
import Image from "next/image"
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
          GitHub, clique sobre eles para obter mais informações.
        </p>

        <section>
          <Project>
            <div>
              <Image height={180} width={180} src="/images/mockflow.png" alt="" />
            </div>

            <footer>
              <strong>Shopping</strong>

              <div>
                <span>TypeScript</span>
                <span>Next.js</span>
                <span>Vite</span>
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
                <span>Vite</span>
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
                <span>Vite</span>
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
                <span>Vite</span>
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
                <span>Vite</span>
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
                <span>Vite</span>
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
                <span>Vite</span>
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
                <span>Vite</span>
              </div>
            </footer>
          </Project>
        </section>
      </Container>
    </>
  )
}

export default Projects
