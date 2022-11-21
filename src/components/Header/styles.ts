import styled from "styled-components"

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.background[900]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background[700]};
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
      line-height: 0;

      img {
        border-radius: ${({ theme }) => theme.radii.full};
      }

      &:focus {
        box-shadow: none;
      }

      &:hover {
        filter: brightness(1.1);
        transition: filter 0.3s;
      }
    }

    nav {
      align-items: center;
      display: flex;
      gap: 1rem;
      height: 4rem;
      line-height: 2.25rem;
    }
  }

  @media (max-width: 670px) {
    display: none;
  }
`

interface ActiveLinkNavbarProps {
  asPath: string
}

export const ActiveLinkNavbar = styled.a<ActiveLinkNavbarProps>`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0 0.5rem;
  color: ${(props) =>
    props.asPath === props.href
      ? props.theme.colors.background[100]
      : props.theme.colors.background[400]};

  background: ${(props) =>
    props.asPath === props.href ? props.theme.colors.background[700] : "transparent"};

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.violet[200]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.background[700]};
    color: ${({ theme }) => theme.colors.background[100]};
    transition: background-color 0.3s, color 0.3s;
  }
`

export const Button = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.background[700]};
  border-radius: ${({ theme }) => theme.radii.sm};
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
    color: ${({ theme }) => theme.colors.background[300]};
  }
`
