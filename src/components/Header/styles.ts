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
    max-width: 780px;
    padding: 0 2rem;
    user-select: none;

    > a {
      border-radius: ${({ theme }) => theme.radii.full};
      line-height: 0;

			img {
				border-radius: ${({ theme }) => theme.radii.full};
			}

      &:hover {
        filter: brightness(1.1);
        transition: filter 0.3s;
      }
    }

    nav {
      display: flex;
      gap: 1rem;

      a {
        border-radius: ${({ theme }) => theme.radii.sm};
        color: ${({ theme }) => theme.colors.gray[300]};
        font-weight: ${({ theme }) => theme.fontWeight.semibold};
        height: 2.25rem;
        line-height: 2.25rem;
        padding: 0 0.5rem;

        &:hover {
          background: ${({ theme }) => theme.colors.gray[700]};
          color: ${({ theme }) => theme.colors.white};
          transition: background-color 0.3s, color 0.3s;
        }
      }
    }
  }
`

export const ButtonToggleTheme = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[700]};
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  display: flex;
  height: 2.25rem;
  justify-content: center;
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
