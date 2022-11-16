import styled from "styled-components"

export const Container = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.gray[800]};
  border-radius: 0.8rem;
  border: 1px solid ${(props) => props.theme.colors.gray[700]};
  display: flex;
  gap: 1.5rem;
  padding: 0.5rem;
  transition: 0.3s;
  user-select: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 4px 6px 12px -8px rgb(0 0 0 / 75%);
  }

  div:first-child {
    background: ${({ theme }) => theme.colors.violet[50]};
    border-radius: 0.5rem;
    height: 3rem;
    width: 3rem;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  strong {
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: ${({ theme }) => theme.lineHeight.base};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.gray[400]};
    line-height: ${({ theme }) => theme.lineHeight.base};
  }
`
