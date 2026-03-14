import { useRef } from 'react'
import SectionWrapper from '../layout/SectionWrapper'

const FEEDBACKS = [
  {
    name: 'Ana M.',
    role: 'Aluna iniciante',
    quote:
      'Eu nao sabia por onde comecar no mundo dos vinhos. As aulas da Simona sao objetivas, praticas e muito elegantes.',
  },
  {
    name: 'Carla V.',
    role: 'Amante de degustacao',
    quote:
      'A parte de harmonizacao mudou meus jantares. Hoje escolho vinhos com seguranca e consigo explicar melhor o que estou provando.',
  },
  {
    name: 'Rafael S.',
    role: 'Entusiasta de terroir',
    quote:
      'A curadoria sobre Lanzarote foi excelente. Conteudo claro, visual bonito e uma experiencia premium do inicio ao fim.',
  },
  {
    name: 'Beatriz L.',
    role: 'Participante do curso',
    quote:
      'Os feedbacks de degustacao foram muito ricos. Aprendi a perceber aroma, textura e final com muito mais clareza.',
  },
  {
    name: 'Marcos T.',
    role: 'Colecionador iniciante',
    quote:
      'A didatica e moderna e direta. Em pouco tempo consegui montar minha selecao de vinhos com escolhas muito melhores.',
  },
]

function Feedbabks() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollFeedbacks = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const amount = Math.max(280, sliderRef.current.clientWidth * 0.8)
    sliderRef.current.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    })
  }

  return (
    <SectionWrapper id="feedbacks" className="feedbacks">
      <h2 className="feedbacks__title">Feedbacks</h2>
      <p className="feedbacks__intro">
        Histórias reais de alunos e amigos que evoluiram na degustacao com o curso da Simona.
      </p>

      <div className="feedbacks__carousel">
        <button
          type="button"
          className="feedbacks__arrow"
          onClick={() => scrollFeedbacks('left')}
          aria-label="Ver feedback anterior"
        >
          ‹
        </button>

        <div className="feedbacks__grid" ref={sliderRef}>
          {FEEDBACKS.map((item) => (
            <article key={item.name} className="feedbacks__card">
              <div className="feedbacks__rating" aria-label="5 estrelas">
                <span>★★★★★</span>
              </div>
              <p className="feedbacks__quote">"{item.quote}"</p>
              <div className="feedbacks__person">
                <p className="feedbacks__name">{item.name}</p>
                <p className="feedbacks__role">{item.role}</p>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="feedbacks__arrow"
          onClick={() => scrollFeedbacks('right')}
          aria-label="Ver proximo feedback"
        >
          ›
        </button>
      </div>
    </SectionWrapper>
  )
}

export default Feedbabks
