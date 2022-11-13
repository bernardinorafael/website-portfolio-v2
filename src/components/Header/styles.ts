import styled from "styled-components"

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  height: 4rem;
  inset: 0;
  position: fixed;
  z-index: 100;

  div {
    align-items: center;
    display: flex;
    height: 4rem;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 720px;
    padding: 0 2rem;
    user-select: none;

    nav {
      display: flex;
      gap: 1rem;

      a {
        border-radius: ${({ theme }) => theme.radii.sm};
        color: ${({ theme }) => theme.colors.gray[300]};
        height: 2.25rem;
        line-height: 2.25rem;
        padding: 0 0.5rem;
      }
    }
  }
`

export const ButtonToggleTheme = styled.button`
	align-items: center;
	display: flex;
	justify-content: center;
  background: ${({ theme }) => theme.colors.gray[700]};
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  height: 2.25rem;
  line-height: 0;
  outline: none;
  width: 2.25rem;

  &:hover {
    filter: brightness(1.1);
    transition: filter 0.3s;
  }

  svg {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`
