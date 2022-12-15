import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import * as Icon from "phosphor-react"
import { Repository } from "../@types/repository"
import CardProject from "../components/CardProject"
import Title from "../components/Title"
import { Container, ProjectsContainer } from "../css/pages/home"
import { app } from "../services/axios"

export const getStaticProps: GetStaticProps = async () => {
  const response = await app.get('/repos?per_page=3&sort=created&direction=desc&"')

  const repositories = response.data.map((repository: Repository) => {
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

    revalidate: 60 * 60 * 6, // 6 h
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
          <Title>Hello! I&apos;m Rafael</Title>

          <p>
            Desenvolvedor web, nascido em Criciúma, Santa Catarina, região sul do país
            <br />e atualmente morando em Sobral, Ceará. Meu contato com a tecnologia veio
            desde cedo, minha família sempre foi envolvida com a informática. Já estive na
            área têxtil, um segmento onde a indústria é bem estabelecida em Santa
            Catarina, porém no decorrer do tempo, me reencontrei na área da tecnologia.
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
            <Icon.ArrowRight />
          </Link>
        </section>
      </Container>
    </>
  )
}
