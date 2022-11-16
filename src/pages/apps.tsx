import Head from "next/head"
import * as Icon from "phosphor-react"
import AppsCards from "../components/AppsCards"
import Title from "../components/Title"
import { Container, TabsContent, TabsList, TabsRoot, TabsTrigger } from "../css/pages/apps"

function Apps() {
  return (
    <>
      <Head>
        <title>Apps | Rafael Bernardino</title>
      </Head>

      <Container>
        <Title>Ferramentas</Title>
        <p>
          Aqui está uma lista de ferramentas, extensões e apps que eu uso no meu dia a dia,
          deixo também como recomendação experimentá-las.
        </p>

        <TabsRoot defaultValue="stacks">
          <TabsList>
            <TabsTrigger value="stacks">
              <Icon.Code size={24} weight="duotone" />
              Stacks
            </TabsTrigger>

            <TabsTrigger value="desktop">
              <Icon.LinuxLogo size={24} weight="duotone" />
              Desktop
            </TabsTrigger>
            <TabsTrigger value="web">
              <Icon.Globe size={24} weight="duotone" />
              Web
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stacks">
            <div>
              <AppsCards
                src="/icons/html-5.svg"
                style={{ background: "#ff6c3730" }}
                strong="HTML"
                p="HTML semântico e SEO"
              />

              <AppsCards
                src="/icons/css-3.svg"
                style={{ background: "#396bdf30" }}
                strong="CSS"
                p="100%"
              />

              <AppsCards
                src="/icons/typescript.svg"
                style={{ background: "#396bdf30" }}
                strong="TypeScript"
                p="Principal linguagem de programação"
              />

              <AppsCards
                src="/icons/mongodb-icon.svg"
                style={{ background: "#e1e1e6" }}
                strong="MongoDB"
                p="Em fase de aprendizado"
              />

              <AppsCards
                src="/icons/nextjs-icon.svg"
                style={{ background: "#e1e1e630" }}
                strong="Next.js"
                p="Utilizo na grande maioria dos meus projetos"
              />

              <AppsCards
                src="/icons/react.svg"
                style={{ background: "#189c9930" }}
                strong="React"
                p="É minha principal ferramenta de interfaces"
              />

              <AppsCards
                src="/icons/styled-components.png"
                style={{ background: "#df39b830" }}
                strong="Styled Components"
                p="É utilizado em 90% dos meus projetos"
              />

              <AppsCards
                src="/icons/golang-1.svg"
                style={{ background: "#18269c30" }}
                strong="Golang"
                p="Em 2023 será iniciado estudos em Go"
              />
            </div>
          </TabsContent>

          <TabsContent value="desktop">
            <div>
              <AppsCards
                src="/icons/visual-studio-code.svg"
                style={{ background: "" }}
                strong="Visual Studio Code"
                p="Editor de texto"
              />

              <AppsCards
                style={{ background: "#00b95420" }}
                src="/icons/spotify-icon.svg"
                strong="Spotify"
                p="Streaming de música"
              />

              <AppsCards
                style={{ background: "#2b2b2b" }}
                src="/icons/obs-icon.svg"
                strong="OBS Studio"
                p="Streaming e gravações"
              />

              <AppsCards
                style={{ background: "#404ee220" }}
                src="/icons/discord-icon.svg"
                strong="Discord"
                p="Comunicação"
              />

              <AppsCards
                style={{ background: "#2b2b2b" }}
                src="/icons/figma-1.svg"
                strong="Figma"
                p="Criação de protótipos"
              />

              <AppsCards
                style={{ background: "#e1e1e6" }}
                src="/icons/notion-2.svg"
                strong="Notion"
                p="Organização"
              />

              <AppsCards
                style={{ background: "#ff6c3730" }}
                src="/icons/postman.svg"
                strong="Postman"
                p="Testes de API"
              />
            </div>
          </TabsContent>

          <TabsContent value="web">
            <div></div>
          </TabsContent>
        </TabsRoot>
      </Container>
    </>
  )
}

export default Apps
