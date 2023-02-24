import styled from 'styled-components'

export const AppCardBox = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.background[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.background[700]};
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  min-height: 200px;

  strong {
    font-size: 1.775rem;
    display: block;
  }

  span {
    color: ${(props) => props.theme.colors.background[300]};
  }
`

export const ImageBox = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  height: 80px;
`

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > div {
    display: flex;
    align-items: start;
    flex-direction: column;

    a {
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      line-height: 0;
      border-bottom: 1px solid transparent;
      outline: none;
      padding: 0.125rem;
      gap: 0.5rem;
      color: ${(props) => props.theme.colors.background[400]};

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.colors.background[300]};
        color: ${({ theme }) => theme.colors.background[300]};
        filter: brightness(1.1);
      }
    }
  }
`
