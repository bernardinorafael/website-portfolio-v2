import styled from "styled-components"
import * as Dialog from "@radix-ui/react-dialog"

export const Container = styled.header`
  @media (max-width: 670px) {
    background: ${({ theme }) => theme.colors.background[900]};
    border-top: 1px solid ${({ theme }) => theme.colors.background[700]};
    bottom: 0;
    height: 5rem;
    padding-bottom: 3rem;
    box-shadow: 0px -21px 48px 0px rgba(0, 0, 0, 0.5);
    padding: 0 2rem;
    position: fixed;
    width: 100%;
    z-index: 100;

    section {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
      height: 4rem;
      padding-top: 0.5rem;
    }
  }
`

export const DialogTrigger = styled(Dialog.Trigger)`
  align-items: center;
  background: transparent;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: none;
  color: ${({ theme }) => theme.colors.background[400]};
  display: flex;
  gap: 0.5rem;
  height: 100%;
  justify-content: center;
  outline: none;

  &:hover {
    background: ${({ theme }) => theme.colors.background[700]};
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s, color 0.3s;

    svg {
      color: ${({ theme }) => theme.colors.white};
      transition: color 0.3s;
    }
  }
`
