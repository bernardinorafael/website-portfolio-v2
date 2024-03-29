import { GetStaticProps } from 'next'
import Head from 'next/head'
import { ArrowUp } from 'phosphor-react'
import { Repository } from '../@types/repository'
import CardProject from '../components/CardProject'
import Title from '../components/Title'
import { Container } from '../css/pages/projects'
import { app } from '../services/axios'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await app.get('/repos', {
    params: {
      sort: 'created',
      direction: 'desc',
    },
  })

  const repositories = data.map((repository: Repository) => {
    return {
      name: repository.name,
      topics: repository.topics,
      svn_url: repository.svn_url,
      language: repository.language,
      created_at: repository.created_at,
      description: repository.description,
      homepage: repository.homepage,
    }
  })

  return {
    props: {
      repositories,
    },

    revalidate: 1000 * 60 * 30, // 30min
  }
}

type ProjectsProps = {
  repositories: Repository[]
}

export default function Projects({ repositories }: ProjectsProps) {
  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>Projetos | Rafael Bernardino</title>
      </Head>

      <Container>
        <Title>Meus projetos</Title>
        <p>
          Nesta seção temos um resumo de meus projetos armazenados e documentados{' '}
          <br /> no GitHub, passe o mouse para mais ações.
        </p>

        <section>
          {repositories?.map((repository) => {
            return repository.name !== 'bernardinorafael' ? (
              <CardProject
                key={repository.id}
                name={repository.name}
                topics={repository.topics}
                svn_url={repository.svn_url}
                language={repository.language}
                homepage={repository.homepage}
                created_at={repository.created_at}
                description={repository.description}
              />
            ) : null
          })}
        </section>

        <button onClick={handleBackToTop} type="button">
          <ArrowUp />
        </button>
      </Container>
    </>
  )
}
