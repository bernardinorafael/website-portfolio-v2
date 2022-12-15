import * as TooltipComponent from '@radix-ui/react-tooltip'
import { TooltipContent } from './styles'

type TooltipProps = {
  content: React.ReactNode
}

export default function Tooltip({ content }: TooltipProps) {
  return (
    <TooltipComponent.Portal>
      <TooltipContent alignOffset={100} sideOffset={5}>
        {content}
      </TooltipContent>
    </TooltipComponent.Portal>
  )
}
