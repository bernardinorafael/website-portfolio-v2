import styled from "styled-components"

export const Container = styled.div`
  align-items: center;
  justify-content: right;
  display: flex;
  gap: 1rem;
  opacity: 0;
  transition: 0.3s;

  a {
    align-items: center;
    display: flex;
    line-height: 0;
    background-color: red;
    padding: 0.325rem;
    border-radius: 6px;
    background-color: transparent;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background[700]};
      transition: background-color 0.2s;
    }
  }
`
