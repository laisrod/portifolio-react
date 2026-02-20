import { useMemo } from 'react'

const COLS = 30
const ROWS = 4

function CrossGrid() {
  const crosses = useMemo(() => Array.from({ length: COLS * ROWS }), [])

  return (
    <section className="cross-grid" aria-hidden="true">
      <div className="cross-grid__container">
        {crosses.map((_, i) => (
          <span key={i} className="cross-grid__item">+</span>
        ))}
      </div>
    </section>
  )
}

export default CrossGrid
