import styled from "styled-components"

export const Container = styled.main`
  margin: 8rem auto 4rem;
  max-width: 780px;
  padding: 0 2rem;
  width: 100%;

  > section {
    display: flex;
    flex-direction: column;

    & + section {
      margin-top: 2rem;
    }

    strong {
      align-self: flex-start;
    }

    p {
      color: ${({ theme }) => theme.colors.background[300]};
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.fontWeight.thin};
      text-align: justify;

      @media (max-width: 470px) {
        text-align: left;
      }

      @media (max-width: 640px) {
        text-align: left;
      }
    }
  }

  section:last-child {
    > a {
      align-items: center;
      align-self: flex-start;
      border: none;
      color: ${({ theme }) => theme.colors.background[400]};
      display: flex;
      flex: 1;
      gap: 0.225rem;
      margin-top: 2rem;
      outline: none;
      padding: 0.225rem;

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.colors.background[300]};
        color: ${({ theme }) => theme.colors.background[300]};
        filter: brightness(1.1);
      }
    }
  }

  @media (max-width: 640px) {
    margin: 5rem auto 6rem;
  }
`

export const ProjectsContainer = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Project = styled.div`
  background: ${({ theme }) => theme.colors.background[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.background[700]};
  display: flex;
  flex-direction: column;
  opacity: 0.7;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
  user-select: none;

  &:hover {
    box-shadow: 4px 6px 12px -8px rgb(0 0 0 / 75%);
    opacity: 1;
    transform: translateY(-3px);

    div:first-child {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.225rem;
    left: 0;
    opacity: 0;
    padding: 0.5rem;
    position: absolute;
    top: 0;

    a {
      align-items: center;
      align-self: flex-start;
      border-bottom: 1px solid transparent;
      color: ${({ theme }) => theme.colors.background[500]};
      display: flex;
      font-size: ${({ theme }) => theme.fontSize.xs};
      gap: 0.225rem;
      border: 1px solid #fff;

      &:hover {
        color: ${({ theme }) => theme.colors.background[300]};
        border-bottom: 1px solid ${({ theme }) => theme.colors.background[300]};
      }

      @media (max-width: 470px) {
        align-self: center;
      }
    }
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  footer {
    display: flex;
    display: flex;
    flex-direction: column;
    gap: 0.225rem;
    padding: 0.5rem 1rem;

    strong {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    span {
      color: ${({ theme }) => theme.colors.background[400]};
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`
