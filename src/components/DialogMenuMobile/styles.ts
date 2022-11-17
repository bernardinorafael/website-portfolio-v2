import * as Dialog from "@radix-ui/react-dialog"
import styled, { keyframes } from "styled-components"

const overlayAnimation = keyframes`
	from {
    opacity: 0;
  }
	
	to {
    opacity: 1;
  }
`

export const DialogClose = styled(Dialog.Close)`
  line-height: 0;
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.background[700]};

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.background[100]};
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.background[400]};
  }
`

export const DialogContent = styled(Dialog.Content)`
  @media (max-width: 640px) {
    --animate-duration: 0.3s;
    background: ${({ theme }) => theme.colors.background[900]};
    border-top: 1px solid ${({ theme }) => theme.colors.background[700]};
    bottom: 0;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
    height: 40%;
    padding: 6rem 2rem 2rem;
    position: fixed;
    width: 100%;
    z-index: 101;

    &:focus {
      box-shadow: none;
    }

    > div {
      align-items: center;
      border-bottom: 1px solid ${({ theme }) => theme.colors.background[700]};
      display: flex;
      justify-content: space-between;
      padding: 0 2rem 1rem;
      position: absolute;
      top: 10px;
      width: 100%;

      strong {
        font-size: ${({ theme }) => theme.fontSize.xxl};
      }
    }

    a {
      display: flex;
      align-items: center;
      background: ${({ theme }) => theme.colors.background[800]};
      padding: 1rem;
      justify-content: center;
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
      border-radius: ${({ theme }) => theme.radii.sm};
      width: inherit;
      gap: 1rem;
      line-height: 0;

      &:hover {
        filter: brightness(1.1);
        transition: filter 0.3s;
      }
    }
  }

  @media (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
    height: 70%;
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  animation: ${overlayAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background: rgba(0, 0, 0, 0.4);
  inset: 0;
  position: fixed;
`
