import SectionWrapper from '../layout/SectionWrapper'
import Card from '../ui/Card'
import type { SkillCategory } from '../../types'

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      'React.js (Hooks, Context)',
      'TypeScript',
      'Redux Toolkit',
      'Vite',
      'React Router',
      'CSS / BEM',
      'Responsive Design',
      'Storybook',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Ruby on Rails',
      'Node.js',
      'RESTful APIs',
      'PostgreSQL',
      'JWT Auth',
      'WebSockets',
      'Active Storage',
      'Service Objects',
    ],
  },
  {
    title: 'Testing & Quality',
    skills: [
      'Vitest',
      'Jest',
      'React Testing Library',
      'RSpec',
      'Capybara',
      'TDD',
      'Clean Code',
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      'Git / GitHub',
      'Docker',
      'Docker Compose',
      'CI/CD',
      'Vercel',
      'Firebase',
      'Agile / Scrum',
    ],
  },
]

function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="skills"
      subtitle="What I bring to the table"
      title="Skills & Technologies"
    >
      <div className="skills__grid">
        {SKILL_CATEGORIES.map((category) => (
          <Card key={category.title}>
            <h3 className="skills__card-title">{category.title}</h3>
            <ul className="skills__list">
              {category.skills.map((skill) => (
                <li key={skill} className="skills__item">
                  <span className="skills__item-dot" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Skills
