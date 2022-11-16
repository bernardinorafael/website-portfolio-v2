import * as Tabs from "@radix-ui/react-tabs"
import styled from "styled-components"

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 8rem auto 2rem;
  max-width: 780px;
  padding: 0 2rem;

  > p {
    align-self: center;
    color: ${({ theme }) => theme.colors.gray[300]};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.thin};
    margin-bottom: 2rem;
    text-align: center;
    user-select: none;
  }
`

export const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TabsList = styled(Tabs.List)`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  &:focus {
    box-shadow: none;
  }
`

export const TabsTrigger = styled(Tabs.Trigger)`
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[700]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: none;
  color: ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  gap: 0.5rem;
  height: 2.5rem;
  justify-content: center;
  line-height: 0;
  user-select: none;

  &[data-state="active"] {
    background: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  &:hover {
    filter: brightness(1.1);
    transition: filter 0.3s;
  }
`

export const TabsContent = styled(Tabs.Content)`
  border-radius: ${({ theme }) => theme.radii.sm};
  flex-grow: 1;
  padding: 1rem 0;

  > div {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }

  &:focus {
    box-shadow: none;
  }
`
