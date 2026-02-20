import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../utils/cn'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
}

function SectionWrapper({ id, children, className, title, subtitle }: SectionWrapperProps) {
  const { ref, isInView } = useInView()

  return (
    <section className={cn('section', className)} id={id}>
      <div
        ref={ref}
        className={cn(
          'container',
          'section__content',
          isInView ? 'section__content--visible' : 'section__content--hidden',
        )}
      >
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
