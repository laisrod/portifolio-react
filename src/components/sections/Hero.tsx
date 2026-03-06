import { useRef, useCallback } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import Badge from '../ui/Badge'

function Hero() {
  const h1Ref = useRef<HTMLHeadingElement>(null)

  const [springs, api] = useSpring(() => ({
    x: 550,
    y: 200,
    active: 0,
    config: { mass: 1, tension: 280, friction: 40 },
  }))

  const updateSpot = useCallback(
    (clientX: number, clientY: number) => {
      const h1 = h1Ref.current
      if (!h1) return
      const rect = h1.getBoundingClientRect()
      api.start({
        x: clientX - rect.left,
        y: clientY - rect.top,
        active: 1,
      })
    },
    [api]
  )

  const hideSpot = useCallback(() => {
    api.start({ active: 0 })
  }, [api])

  /* Mouse handlers */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => updateSpot(e.clientX, e.clientY),
    [updateSpot]
  )

  /* Touch handlers */
  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLElement>) => {
      const touch = e.touches[0]
      if (touch) updateSpot(touch.clientX, touch.clientY)
    },
    [updateSpot]
  )

  return (
    <section
      className="hero"
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={hideSpot}
      onTouchMove={handleTouchMove}
      onTouchEnd={hideSpot}
    >
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__container">
        <animated.h1
          className="hero__statement"
          ref={h1Ref}
          style={{
            backgroundImage: to(
              [springs.x, springs.y, springs.active],
              (x, y, a) =>
                a > 0.1
                  ? `radial-gradient(circle 360px at ${x}px ${y}px, #c08a2f 0%, #7d1f3a 34%, #41214d 72%, #1f1024 100%)`
                  : `linear-gradient(135deg, #c08a2f 0%, #7d1f3a 35%, #54275d 68%, #1f1024 100%)`
            ),
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Sharing my passion for wine and inspiring my friends
          
        </animated.h1>

        <div className="hero__bottom">
          <div className="hero__info">
            <p className="hero__name">Simona</p>
            <p className="hero__title">Criadora de Conteudo Digital sobre Vinhos</p>
            <Badge variant="status">Inscricoes Abertas</Badge>
          </div>

          <div className="hero__social">
            <a
              href="#contact"
              className="hero__social-link"
              aria-label="Inscricao no curso"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 3h12" />
                <path d="M8 3v4a4 4 0 0 0 8 0V3" />
                <path d="M12 11v8" />
                <path d="M8 21h8" />
              </svg>
            </a>
            <a
              href="#projects"
              className="hero__social-link"
              aria-label="Conteudos e degustacoes"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 20h16" />
                <path d="M7 20v-8a5 5 0 1 1 10 0v8" />
                <circle cx="12" cy="6" r="2" />
              </svg>
            </a>
            <a
              href="mailto:simona.vinhos@email.com"
              className="hero__social-link"
              aria-label="Enviar email"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
