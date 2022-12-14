import * as Popover from "@radix-ui/react-popover"
import styled, { keyframes } from "styled-components"

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
  animation: ${fadeAnimation} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  background: ${({ theme }) => theme.colors.background[800]};
  border-radius: ${({ theme }) => theme.radii.xs};
  border: 1px solid ${({ theme }) => theme.colors.background[700]};
  box-shadow: 0 10px 20px -8px rgb(0 0 0 / 75%);
  transform-origin: var(--radix-popover-content-transform-origin);
  user-select: none;
  z-index: 101;

  &:focus {
    box-shadow: 4px 6px 20px -8px rgb(0 0 0 / 75%);
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

export const ItemPopover = styled.div`
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
      gap: 0.225rem;
    }

    p {
      color: ${({ theme }) => theme.colors.background[400]};
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`
