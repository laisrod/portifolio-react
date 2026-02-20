import SectionWrapper from '../layout/SectionWrapper'
import ProjectCard from '../common/ProjectCard'
import type { ProjectData } from '../../types'

const PROJECTS: ProjectData[] = [
  {
    title: 'PaLeva — Restaurant Management System',
    year: '2026',
    description:
      'Full-stack restaurant platform with automated order lifecycle, real-time notifications via WebSockets, dual-role authentication, analytics dashboard with charts, multi-portion inline CRUD, and dynamic menus with filters, tags, and schedules. 100% responsive with a modern dark theme.',
    techs: [
      'React 19',
      'TypeScript',
      'Vite',
      'React Router v7',
      'CSS / BEM',
      'Rails 7.2',
      'REST API',
      'JWT',
      'WebSockets',
      'Docker',
      'RSpec',
    ],
    repoUrl: 'https://github.com/laisrod/PaLeva',
    demoUrl: 'https://pa-leva.vercel.app/login',
    imageAlt: 'PaLeva restaurant management application screenshot',
    featured: true,
  },
  {
    title: 'Brazilian Cinema — Movie Discovery',
    year: '2024',
    description:
      'Responsive movie discovery platform for Brazilian films with advanced filters, infinite scroll, secure authentication, and role-based protected routes. Built with a full component library in Storybook and comprehensive test coverage.',
    techs: [
      'React 18',
      'TypeScript',
      'Redux Toolkit',
      'Vite',
      'Firebase Auth',
      'TMDb API',
      'Storybook',
      'Vitest',
      'RTL',
      'CSS / BEM',
    ],
    repoUrl: 'https://github.com/laisrod/S7-BrazilianFilms',
    demoUrl: 'https://s7-brazilian-films.vercel.app/',
    imageAlt: 'Brazilian Cinema movie discovery application screenshot',
    featured: false,
  },
]

function Projects() {
  return (
    <SectionWrapper
      id="projects"
      className="projects"
      subtitle="What I've been building"
      title="Featured Projects"
    >
      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Projects
