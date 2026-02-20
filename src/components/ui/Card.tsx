import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
}

function Card({ children, className, hoverable = true }: CardProps) {
  return (
    <div className={cn('card', hoverable && 'card--hoverable', className)}>
      {children}
    </div>
  )
}

export default Card
