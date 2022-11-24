import styled from "styled-components"

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.background[900]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background[700]};
  height: 3rem;
  inset: 0;
  position: fixed;
  z-index: 100;

  > div {
    align-items: center;
    display: flex;
    height: inherit;
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
    }
  }

  > div div:last-child {
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 670px) {
    display: none;
  }
`

interface ActiveLinkNavbarProps {
  asPath: string
}

export const ActiveLinkNavbar = styled.a<ActiveLinkNavbarProps>`
  background: transparent;
  color: ${(props) =>
    props.asPath === props.href
      ? props.theme.colors.white
      : props.theme.colors.background[300]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: 0 0.5rem;
  position: relative;

  &::after {
    bottom: -14px;
    background: ${(props) =>
      props.asPath === props.href ? props.theme.colors.violet[200] : "transparent"};
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.2s;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.violet[200]};
  }
`

export const Button = styled.button`
  align-items: center;
  background: transparent;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: none;
  display: flex;
  height: 2rem;
  justify-content: center;
  line-height: 0;
  outline: none;
  width: 2rem;

  &:hover {
    background: ${({ theme }) => theme.colors.background[700]};
    transition: background-color 0.3s;
  }

  svg {
    color: ${({ theme }) => theme.colors.background[300]};
  }
`
