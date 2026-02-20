import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'status'
  className?: string
}

function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn('badge', `badge--${variant}`, className)}>
      {variant === 'status' && <span className="badge__dot" aria-hidden="true" />}
      {children}
    </span>
  )
}

export default Badge
