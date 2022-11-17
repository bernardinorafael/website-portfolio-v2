import styled from "styled-components"

export const Container = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.background[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${(props) => props.theme.colors.background[700]};
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
    align-items: center;
    background: ${({ theme }) => theme.colors.violet[50]};
    border-radius: ${({ theme }) => theme.radii.sm};
    display: flex;
    height: 3rem;
    justify-content: center;
    width: 3rem;
  }

  strong {
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: ${({ theme }) => theme.lineHeight.base};
  }

  p {
    color: ${({ theme }) => theme.colors.background[400]};
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: ${({ theme }) => theme.lineHeight.base};
  }

  @media (max-width: 640px) {
    padding: 1rem;
  }
`
