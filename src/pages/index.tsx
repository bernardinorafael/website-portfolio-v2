import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'
import { Repository } from '../@types/repository'
import CardProject from '../components/CardProject'
import Title from '../components/Title'
import { Container, ProjectsContainer } from '../css/pages/home'
import { app } from '../services/axios'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await app.get('/repos', {
    params: {
      per_page: 3,
      sort: 'created',
      direction: 'desc',
    },
  })

  const repositories = data.map((repository: Repository) => {
    return {
      created_at: repository.created_at,
      description: repository.description,
      homepage: repository.homepage,
      language: repository.language,
      name: repository.name,
      svn_url: repository.svn_url,
      topics: repository.topics,
    }
  })

  return {
    props: {
      repositories,
    },

    revalidate: 1000 * 60 * 30, // 30min
  }
}

interface HomeScreenProps {
  repositories: Repository[]
}

export default function HomeScreen({ repositories }: HomeScreenProps) {
  return (
    <>
      <Head>
        <title>Rafael Bernardino</title>
      </Head>

      <Container>
        <section>
          <Title>Olá! Sou Rafael!</Title>
          <p>
            Nascido Criciúma, uma cidade na região sul de Santa Catarina e atualmente
            residindo em Sobral, no Ceará. Desde criança, fui exposto à tecnologia
            por meio da minha família, que sempre esteve envolvida nesse universo.
            Embora eu tenha trabalhado anteriormente na indústria têxtil, que é um
            setor importante na região sul do Brasil, descobri que meu verdadeiro
            interesse está na área de tecnologia e, por isso, retornei a este mundo.
          </p>
        </section>

        <section>
          <Title>Meus projetos</Title>

          <ProjectsContainer>
            {repositories?.map((repository) => {
              return (
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
              )
            })}
          </ProjectsContainer>

          <Link href="/projects">
            Ver mais projetos
            <ArrowRight weight="bold" />
          </Link>
        </section>
      </Container>
    </>
  )
}
