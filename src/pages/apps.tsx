import Head from 'next/head'
import AppCard from '../components/AppsCards'
import Title from '../components/Title'
import { ContainerBox, AppsContentBox } from '../css/pages/apps'

export default function Apps() {
  return (
    <>
      <Head>
        <title>Apps | Rafael Bernardino</title>
      </Head>

      <ContainerBox>
        <Title>Stacks</Title>
        <p>Um breve resumo das tecnologias em que utilizo no dia-a-dia.</p>

        <AppsContentBox>
          <AppCard
            title="TypeScript"
            href="https://www.typescriptlang.org"
            textHref="typescriptlang.org"
            imageUrl="/icons/typescript.svg"
            description="Em conjunto com o JavaScript, é minha linguagem de programação. Em ambiente Front-end e Back-end."
          />
          <AppCard
            title="React"
            href="https://reactjs.org"
            textHref="reactjs.org"
            imageUrl="/icons/react.svg"
            description="React e seu ecossistema de bibliotecas é a principal maneira de construção de interfaces que venho utilizando."
          />
          <AppCard
            title="Next.js"
            href="https://nextjs.org"
            textHref="nextjs.org"
            imageUrl="/icons/nextjs.svg"
            description="Framework de React, grande destaque quando falamos de SSR."
          />
          <AppCard
            title="Node.js"
            href="https://nodejs.org/en/"
            textHref="nodejs.org"
            imageUrl="/icons/nodejs.svg"
            description="Através do Node.js, fazemos a construção de APIs utilizando TypeScript para consumos externos."
          />
          <AppCard
            title="MySQL"
            href="https://www.mysql.com"
            textHref="mysql.com"
            imageUrl="/icons/mysql.svg"
            description="MySQL atualmente é meu principal banco de dados em que venho aplicando em projetos reais."
          />
          <AppCard
            title="Prisma"
            href="https://www.prisma.io"
            textHref="prisma.io"
            imageUrl="/icons/prisma.svg"
            description="ORM para otimização da escrita SQL, em conjunto com Node.js e MySQL. Também já realizei projetos com outros similares, como Knex e Sequelize."
          />
        </AppsContentBox>

        <p>
          Além das tecnologias acimas citadas, tenho proficiência em demais outras
          ferramentas do ecossistema de desenvolvimento de software, tais como Zod,
          React-Hook-Form, React-Query, React-Hooks, MaterialUI, Tailwindcss, consumo
          de API-Rest, Express, Fastify e etc...
        </p>
      </ContainerBox>
    </>
  )
}
