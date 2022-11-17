import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 8rem auto 4rem;
  max-width: 780px;
  padding: 0 2rem;

  strong {
    align-self: center;
  }

  p {
    align-self: center;
    color: ${({ theme }) => theme.colors.background[300]};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.thin};
    text-align: center;
    user-select: none;
  }

  section {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 3rem;

    @media (max-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 470px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 640px) {
    margin: 5rem auto 8rem;
  }
`

export const Project = styled.div`
  background: ${({ theme }) => theme.colors.background[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.background[700]};
  display: flex;
  position: relative;
  user-select: none;
  flex-direction: column;
  opacity: 0.7;
  overflow: hidden;
  transition: 0.3s;

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
    position: absolute;
    display: flex;
    gap: 0.225rem;
    flex-direction: column;
    top: 5px;
    left: 5px;
    opacity: 0;

    a {
      font-size: ${({ theme }) => theme.fontSize.xs};
      color: ${({ theme }) => theme.colors.background[500]};
      display: flex;
      align-items: center;
      gap: 0.225rem;
      align-self: flex-start;
      border-bottom: 1px solid transparent;

      &:hover {
        color: ${({ theme }) => theme.colors.background[300]};
        border-bottom: 1px solid ${({ theme }) => theme.colors.background[300]};
      }
    }
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  footer {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    display: flex;
    gap: 0.225rem;
    box-shadow: 4px 6px 20px -8px rgb(0 0 0 / 75%);

    strong {
      align-self: flex-start;
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    span {
      color: ${({ theme }) => theme.colors.background[400]};
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`
