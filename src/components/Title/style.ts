import styled from "styled-components"

export const Strong = styled.strong`
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.mono};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  margin-bottom: 1.5rem;
  padding-bottom: 0.625rem;
  user-select: none;
`
