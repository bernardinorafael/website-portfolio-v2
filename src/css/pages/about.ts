import * as Accordion from "@radix-ui/react-accordion"
import styled, { keyframes } from "styled-components"

export const Container = styled.main`
  margin: 8rem auto 4rem;
  max-width: 780px;
  padding: 0 2rem;
  width: 100%;

  @media (max-width: 640px) {
    margin: 5rem auto 6rem;
  }
`

export const AccordionRoot = styled(Accordion.Root)`
  background: ${({ theme }) => theme.colors.background[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: 10px 10px 36px -7px rgba(0, 0, 0, 0.3);
`

export const AccordionItem = styled(Accordion.Item)`
  border: 1px solid ${(props) => props.theme.colors.background[700]};

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
  background: ${({ theme }) => theme.colors.background[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: none;
  color: ${({ theme }) => theme.colors.background[300]};
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.mono};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  justify-content: space-between;
  outline: none;
  padding: 0.8rem;
  position: relative;
  width: 100%;

  &:hover {
    filter: brightness(1.1);
    transition: filter 0.3s;
  }

  svg {
    transition: 0.3s cubic-bezier(0.87, 0, 0.13, 1);

    [data-state="open"]& {
      transform: rotate(90deg);
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
  background: ${({ theme }) => theme.colors.background[900]};
  overflow: hidden;

  div {
    color: ${({ theme }) => theme.colors.background[300]};
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: ${({ theme }) => theme.lineHeight.base};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    padding: 1rem;
    text-align: justify;
  }

  &[data-state="open"] {
    animation: ${slideDown} 0.3s cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state="closed"] {
    animation: ${slideUp} 0.3s cubic-bezier(0.87, 0, 0.13, 1);
  }
`

export const LikeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
`
