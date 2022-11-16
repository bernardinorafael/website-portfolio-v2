import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 8rem auto 2rem;
  max-width: 780px;
  padding: 0 2rem;

  strong {
    align-self: center;
  }

  p {
    align-self: center;
    color: ${({ theme }) => theme.colors.gray[300]};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.thin};
    text-align: center;
    user-select: none;
  }

  section {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 3rem;
  }
`

export const Project = styled.div`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  opacity: 0.7;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    box-shadow: 4px 6px 12px -8px rgb(0 0 0 / 75%);
    opacity: 1;
    transform: translateY(-3px);
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    box-shadow: 4px 6px 20px -8px rgb(0 0 0 / 75%);

    strong {
      align-self: flex-start;
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    div {
      display: flex;
      gap: 0.5rem;

      span {
        background: ${({ theme }) => theme.colors.violet[50]};
        border-radius: ${({ theme }) => theme.radii.xs};
        color: ${({ theme }) => theme.colors.violet[300]};
        font-size: ${({ theme }) => theme.fontSize.xxs};
        padding: 0.225rem;

        &:last-child {
          background: ${({ theme }) => theme.colors.red[50]};
          color: ${({ theme }) => theme.colors.red[300]};
        }
      }
    }
  }
`
