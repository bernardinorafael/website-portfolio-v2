import styled from 'styled-components'

export const Container = styled.main`
  margin: 4rem auto 3rem;
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

      @media (max-width: 670px) {
        align-self: center;
      }
    }

    p {
      color: ${({ theme }) => theme.colors.background[300]};
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.fontWeight.thin};
      text-align: justify;

      @media (max-width: 470px) {
        text-align: left;
      }

      @media (max-width: 670px) {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.md};
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
      gap: 0.5rem;
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

  @media (max-width: 670px) {
    margin: 2.5rem auto 7rem;
  }
`

export const ProjectsContainer = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
`

export const Project = styled.div`
  background: ${({ theme }) => theme.colors.background[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.background[700]};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0.8;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  transition: 0.3s;
  user-select: none;

  &:hover {
    box-shadow: 4px 6px 12px -8px rgb(0 0 0 / 75%);
    transform: translateY(-3px);
  }

  strong {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  > span {
    color: ${({ theme }) => theme.colors.background[400]};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.thin};
    height: 2.25rem;
  }

  div {
    align-items: center;
    display: flex;
    gap: 0.5rem;

    span {
      background: ${({ theme }) => theme.colors.purple.purple2};
      border-radius: ${({ theme }) => theme.radii.xs};
      border: 1px solid ${({ theme }) => theme.colors.purple.purple6};
      color: ${({ theme }) => theme.colors.purple.purple11};
      font-size: ${({ theme }) => theme.fontSize.xs};
      line-height: 1.6;
      padding: 0.125rem 0.325rem;
    }
  }

  footer {
    align-items: center;
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;

    span {
      color: ${({ theme }) => theme.colors.background[400]};
      font-size: ${({ theme }) => theme.fontSize.xs};

      &:first-child {
        align-items: center;
        display: flex;
        gap: 0.225rem;
        line-height: 0;
      }
    }
  }
`
