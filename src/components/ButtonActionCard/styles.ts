import styled from "styled-components"

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.225rem;
  opacity: 0;
  transition: 0.3s;

  a {
    align-items: center;
    border-bottom: 1px solid transparent;
    color: ${({ theme }) => theme.colors.background[500]};
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.xs};
    gap: 0.225rem;
    line-height: 0;
    padding-bottom: 0.225rem;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.background[500]};
      transition: border-bottom 0.2s;
    }
  }
`
