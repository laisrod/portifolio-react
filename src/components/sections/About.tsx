import SectionWrapper from '../layout/SectionWrapper'
import Badge from '../ui/Badge'

const HIGHLIGHTS = [
  { label: 'Location', value: 'Barcelona, Spain' },
  { label: 'Availability', value: 'Hybrid / Remote' },
  { label: 'Focus', value: 'Full Stack Development' },
  { label: 'Languages', value: 'English · Portuguese · Spanish' },
]

const TECH_TAGS = [
  'React',
  'TypeScript',
  'Ruby on Rails',
  'Node.js',
  'Redux Toolkit',
  'REST APIs',
  'PostgreSQL',
  'Docker',
  'Git / CI/CD',
  'TDD',
]

function About() {
  return (
    <SectionWrapper
      id="about"
      className="about"
      subtitle="Get to know me"
      title="About Me"
    >
      <div className="about__grid">
        <div className="about__text">
          <p className="about__paragraph">
            Passionate about building <strong>scalable, user-centric applications</strong> that
            solve real problems and improve daily workflows. I bring strong full-stack
            experience with <strong>React + TypeScript</strong> on the frontend and{' '}
            <strong>Ruby on Rails / Node.js</strong> on the backend.
          </p>
          <p className="about__paragraph">
            Recent intensive bootcamps sharpened my skills in modern React patterns,
            TypeScript strict typing, clean architecture, real-time features with
            WebSockets, API integrations, <strong>TDD</strong>, and containerization
            with Docker.
          </p>
          <p className="about__paragraph">
            I thrive in collaborative, fast-paced environments and I'm eager to
            contribute ownership, high-quality code, and a product mindset to
            growing tech teams — whether remote or on-site in Barcelona.
          </p>

          <ul className="about__highlights">
            {HIGHLIGHTS.map((item) => (
              <li key={item.label} className="about__highlight">
                <span className="about__highlight-label">{item.label}</span>
                <span className="about__highlight-value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__tags">
          <h3 className="about__tags-title">Tech I work with</h3>
          <div className="about__tag-list">
            {TECH_TAGS.map((tag) => (
              <Badge key={tag} variant="default">{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About
