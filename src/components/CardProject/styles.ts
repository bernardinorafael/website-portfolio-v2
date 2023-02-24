import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.background[700]};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  transition: all 400ms;
  user-select: none;

  > div div {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transform: translateY(-4px);

    > div div {
      opacity: 1;
    }
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

interface IconHighlightProps {
  variant?: 'TypeScript' | 'JavaScript' | string
}

export const IconHighlight = styled.span<IconHighlightProps>`
  color: ${({ theme }) => theme.colors.background[400]};
  font-size: ${({ theme }) => theme.fontSize.xs};

  svg {
    color: ${(props) =>
      props.variant === 'TypeScript'
        ? props.theme.colors.red[300]
        : props.theme.colors.green[300]};
  }
`
