import styled from "styled-components"

interface SpanProps {
  variant: "green" | "red"
}

export const Span = styled.span<SpanProps>`
  background: ${(props) =>
    props.variant === "green" ? props.theme.colors.green[50] : props.theme.colors.red[50]};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${(props) =>
    props.variant === "green" ? props.theme.colors.green[500] : props.theme.colors.red[500]};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: 0 0.5rem;
`
