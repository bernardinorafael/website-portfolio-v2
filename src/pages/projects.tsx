import { GetStaticProps } from "next"
import Head from "next/head"
import * as Icon from "phosphor-react"
import { Repository } from "../@types/repository"
import CardProject from "../components/CardProject"
import Title from "../components/Title"
import { Container } from "../css/pages/projects"
import { app } from "../services/axios"

export const getStaticProps: GetStaticProps = async () => {
  const response = await app.get("/repos?sort=pushed&direction=desc&")

  const repositories = response.data.map((repository: Repository) => {
    return {
      name: repository.name,
      topics: repository.topics,
      svn_url: repository.svn_url,
      language: repository.language,
      created_at: repository.created_at,
      description: repository.description,
    }
  })

  return {
    props: {
      repositories,
    },

    revalidate: 60 * 60 * 48, // 2 days
  }
}

interface ProjectsProps {
  repositories: Repository[]
}

function Projects({ repositories }: ProjectsProps) {
  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Head>
        <title>Projetos | Rafael Bernardino</title>
      </Head>

      <Container>
        <Title>Meus projetos</Title>
        <p>
          Nesta seção temos um resumo de meus projetos armazenados e documentados <br /> no
          GitHub, passe o mouse para mais ações.
        </p>

        <section>
          {repositories?.map((repository) => {
            return repository.name !== "bernardinorafael" ? (
              <CardProject
                key={repository.id}
                name={repository.name}
                topics={repository.topics}
                svn_url={repository.svn_url}
                language={repository.language}
                created_at={repository.created_at}
                description={repository.description}
              />
            ) : null
          })}
        </section>

        <button onClick={handleBackToTop} type="button">
          <Icon.ArrowUp />
        </button>
      </Container>
    </>
  )
}

export default Projects
