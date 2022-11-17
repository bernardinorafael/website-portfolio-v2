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

export const DialogContent = styled(Dialog.Content)`
  @media (max-width: 640px) {
    --animate-duration: 0.3s;
    background: ${({ theme }) => theme.colors.background[900]};
    border-top: 1px solid ${({ theme }) => theme.colors.background[700]};
    bottom: 0;
    display: grid;
    gap: 1.5rem;
    grid-template-rows: repeat(3, 1fr);
    height: 70%;
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
  }
`

export const DialogClose = styled(Dialog.Close)`
  background: ${({ theme }) => theme.colors.background[700]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: none;
  line-height: 0;
  outline: none;
  padding: 0.5rem;

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.background[100]};
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.background[400]};
  }
`

export const ItemContact = styled.div`
  background: transparent;
  border-radius: ${({ theme }) => theme.radii.xs};
  border: 1px solid ${({ theme }) => theme.colors.background[700]};
  display: flex;
  gap: 1rem;
  height: 100%;
  padding: 1rem 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.background[700]};
    border: 1px solid ${({ theme }) => theme.colors.background[600]};
    transition: background-color 0.2s, borde-color 0.2s;
  }

  > div {
    display: flex;
    gap: 1rem;

    strong {
      align-items: center;
      display: flex;
      font-size: ${({ theme }) => theme.fontSize.xxl};
      gap: 0.225rem;
      line-height: 0;
      margin-bottom: 0.5rem;
    }

    p {
      color: ${({ theme }) => theme.colors.background[400]};
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  animation: ${overlayAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background: rgba(0, 0, 0, 0.4);
  inset: 0;
  position: fixed;
`
