import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 4rem auto 4rem;
  max-width: 780px;
  padding: 0 2rem;

  > strong {
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
    grid-template-columns: repeat(1, 1fr);
    margin-top: 3rem;
  }

  @media (max-width: 670px) {
    margin: 2.5rem auto 7rem;
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
    left: 5px;
    opacity: 0;
    position: absolute;
    top: 5px;

    a {
      align-items: center;
      align-self: flex-start;
      border-bottom: 1px solid transparent;
      color: ${({ theme }) => theme.colors.background[500]};
      display: flex;
      font-size: ${({ theme }) => theme.fontSize.xs};
      gap: 0.225rem;

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.colors.background[300]};
        color: ${({ theme }) => theme.colors.background[300]};
      }
    }
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  footer {
    box-shadow: 4px 6px 20px -8px rgb(0 0 0 / 75%);
    display: flex;
    display: flex;
    flex-direction: column;
    gap: 0.225rem;
    padding: 0.5rem 1rem;

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
