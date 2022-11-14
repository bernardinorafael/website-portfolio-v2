import { Span } from "./styles"

interface LikeCardProps {
  variant: "green" | "red"
  children: React.ReactNode
}

function LikeCard({ children, variant }: LikeCardProps) {
  return <Span variant={variant}>{children}</Span>
}

export default LikeCard
