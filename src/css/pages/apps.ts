import styled from 'styled-components'

export const ContainerBox = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 4rem auto 4rem;
  max-width: 780px;
  padding: 0 2rem;

  > p {
    align-self: center;
    color: ${({ theme }) => theme.colors.background[300]};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.thin};
    margin-bottom: 2rem;
    text-align: center;
    user-select: none;

    &:last-child {
      margin-top: 2rem;
    }
  }

  @media (max-width: 670px) {
    margin: 2.5rem auto 7rem;
  }
`

export const AppsContentBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
