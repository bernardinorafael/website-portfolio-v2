import styled, { keyframes } from "styled-components"
import * as Accordion from "@radix-ui/react-accordion"

export const Container = styled.main`
  margin: 8rem auto 4rem;
  max-width: 780px;
  padding: 0 2rem;
  width: 100%;
`

export const AccordionRoot = styled(Accordion.Root)`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
`

export const AccordionItem = styled(Accordion.Item)`
  border: 1px solid ${(props) => props.theme.colors.gray[700]};

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.radii.sm};
    border-top-right-radius: ${({ theme }) => theme.radii.sm};
    margin-top: 0;
  }

  &:last-child {
    border-bottom-left-radius: ${({ theme }) => theme.radii.sm};
    border-bottom-right-radius: ${({ theme }) => theme.radii.sm};
  }

  &:focus-within {
    position: relative;
    z-index: 99;
  }
`

export const AccordionTrigger = styled(Accordion.Trigger)`
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: none;
  color: ${({ theme }) => theme.colors.gray[300]};
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.mono};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  justify-content: space-between;
  outline: none;
  padding: 1rem;
  position: relative;
  width: 100%;

  &:hover {
    filter: brightness(1.1);
    transition: filter 0.3s;
  }

  svg {
    transition: 0.3s ease-in-out;

    [data-state="open"]& {
      transform: rotate(180deg);
    }
  }
`

const slideDown = keyframes`
	from { height: 0 }
	to { height: var(--radix-accordion-content-height) }
`

const slideUp = keyframes`
	from { height: var(--radix-accordion-content-height) }
	to { height: 0 }
`

export const AccordionContent = styled(Accordion.Content)`
  background: ${({ theme }) => theme.colors.gray[900]};
  overflow: hidden;

  div {
    color: ${({ theme }) => theme.colors.gray[300]};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.thin};
    padding: 1rem;
    text-align: justify;
  }

  &[data-state="open"] {
    animation: ${slideDown} 0.2s ease-out;
  }

  &[data-state="closed"] {
    animation: ${slideUp} 0.2s ease-out;
  }
`
