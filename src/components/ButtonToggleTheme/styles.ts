import styled from "styled-components"

export const Button = styled.button`
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: transparent;
  border: none;
  display: flex;
  gap: 1rem;
  height: 2rem;
  justify-content: center;
  line-height: 0;
  outline: none;
  width: 2rem;

  &:hover {
    background: ${({ theme }) => theme.colors.background[700]};
    transition: background-color 0.2s;
  }

  span {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.background[300]};
  }

  @media (max-width: 670px) {
    justify-content: center;
    padding: 0 0.5rem;
    width: auto;

    span {
      display: block;
      color: ${({ theme }) => theme.colors.background[400]};
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
    }
  }
`
