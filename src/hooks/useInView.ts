import { useEffect, useRef, useState } from 'react'

/**
 * Observes an element and returns `true` once it enters the viewport.
 * Fires only once (unobserves after first intersection).
 */
export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    /* Fallback: if IntersectionObserver is unsupported, show content immediately */
    if (!('IntersectionObserver' in window)) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true)
          observer.unobserve(element)
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView } as const
}
