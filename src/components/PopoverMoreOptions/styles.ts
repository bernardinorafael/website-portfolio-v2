import * as Popover from "@radix-ui/react-popover"
import styled, { css, keyframes } from "styled-components"

const fadeAnimation = keyframes`
	from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const PopoverContent = styled(Popover.Content)`
  background: ${({ theme }) => theme.colors.background[800]};
  border-radius: ${({ theme }) => theme.radii.xs};
  border: 1px solid ${({ theme }) => theme.colors.background[700]};
  box-shadow: 0 10px 20px -8px rgb(0 0 0 / 75%);
  user-select: none;
  z-index: 101;

  animation: ${fadeAnimation} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: var(--radix-popover-content-transform-origin);

  &:focus {
    box-shadow: 0 10px 20px -8px rgb(0 0 0 / 75%);
  }

  a:focus {
    border-radius: ${({ theme }) => theme.radii.sm};
    position: relative;
    z-index: 100;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
  }
`

interface ItemPopoverProps {
  disabledContent?: boolean
}

export const ItemPopover = styled.div<ItemPopoverProps>`
  background: transparent;
  border-radius: ${({ theme }) => theme.radii.xs};
  border: 1px solid transparent;
  display: flex;
  gap: 1rem;
  padding: 1rem 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.background[700]};
    border: 1px solid ${({ theme }) => theme.colors.background[600]};
    transition: background-color 0.2s, borde-color 0.2s;
  }

  div {
    strong {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    strong {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        background: ${({ theme }) => theme.colors.purple.purple2};
        border: 1px solid ${({ theme }) => theme.colors.purple.purple6};
        color: ${({ theme }) => theme.colors.purple.purple11};
        font-size: ${({ theme }) => theme.fontSize.xs};
        font-weight: ${({ theme }) => theme.fontWeight.thin};
        border-radius: ${({ theme }) => theme.radii.xs};
        padding: 0.125rem;
      }
    }

    p {
      color: ${({ theme }) => theme.colors.background[400]};
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }

  ${({ disabledContent }) =>
    disabledContent &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    `}
`
