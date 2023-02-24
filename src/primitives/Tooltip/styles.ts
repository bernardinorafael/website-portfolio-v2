import { Content } from '@radix-ui/react-tooltip'
import styled from 'styled-components'

export const TooltipContent = styled(Content)`
  background-color: ${({ theme }) => theme.colors.background[700]};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 20px 30px -10px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
  padding: 0.5rem;
`
