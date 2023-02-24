import Image from 'next/image'
import Link from 'next/link'
import { ArrowSquareOut } from 'phosphor-react'
import { AppCardBox, Heading, ImageBox } from './styles'

interface AppsCardProps {
  imageUrl: string
  title: string
  href: string
  textHref: string
  description: string
}

export default function AppCard(props: AppsCardProps) {
  return (
    <AppCardBox>
      <Heading>
        <ImageBox>
          <Image fill src={props.imageUrl} alt="" />
        </ImageBox>

        <div>
          <strong>{props.title}</strong>

          <Link rel="external" target="_blank" href={props.href}>
            <em>{props.textHref}</em>
            <ArrowSquareOut size={18} />
          </Link>
        </div>
      </Heading>

      <span>{props.description}</span>
    </AppCardBox>
  )
}
