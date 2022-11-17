import styled from "styled-components"

export const Button = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.background[700]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: none;
  display: flex;
  gap: 1rem;
  height: 2.25rem;
  justify-content: center;
  line-height: 0;
  outline: none;
  width: 2.25rem;

  &:hover {
    filter: brightness(1.1);
    transition: filter 0.3s;
  }

  span {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.background[300]};
  }

  @media (max-width: 640px) {
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
