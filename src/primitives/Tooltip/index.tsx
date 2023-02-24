import * as TooltipComponent from '@radix-ui/react-tooltip'
import { TooltipContent } from './styles'

interface TooltipProps {
  children: React.ReactNode
  render: string
}

export default function Tooltip({ children, render }: TooltipProps) {
  return (
    <TooltipComponent.Root>
      <TooltipComponent.Trigger asChild>{children}</TooltipComponent.Trigger>

      <TooltipComponent.Portal>
        <TooltipContent alignOffset={100} sideOffset={10}>
          {render}
        </TooltipContent>
      </TooltipComponent.Portal>
    </TooltipComponent.Root>
  )
}
