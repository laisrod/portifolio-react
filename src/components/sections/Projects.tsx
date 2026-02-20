import SectionWrapper from '../layout/SectionWrapper'
import ProjectCard from '../common/ProjectCard'
import type { ProjectData } from '../../types'

const PROJECTS: ProjectData[] = [
  {
    title: 'PaLeva: Full-Stack Restaurant Management',
    year: '2026',
    description:
      'A complete restaurant management platform built with React 19, TypeScript, and Rails 7.2. Features automated order lifecycle, real-time notifications via WebSockets, dual-role auth, analytics dashboard with charts, and dynamic menus with filters and schedules.',
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
    title: 'Brazilian Cinema: Movie Discovery Platform',
    year: '2024',
    description:
      'A responsive movie discovery app for Brazilian films built with React 18, Redux Toolkit, and Firebase Auth. Users can explore movies with advanced filters, infinite scroll, secure authentication, and role-based protected routes.',
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
  // TODO: Add project 3
  // {
  //   title: 'Project Name',
  //   year: '2025',
  //   description: 'Short description of the project.',
  //   techs: ['React', 'TypeScript'],
  //   repoUrl: 'https://github.com/laisrod/project-name',
  //   demoUrl: 'https://project-name.vercel.app/',
  //   imageAlt: 'Project screenshot',
  //   featured: false,
  // },
  // TODO: Add project 4
  // {
  //   title: 'Project Name',
  //   year: '2025',
  //   description: 'Short description of the project.',
  //   techs: ['React', 'TypeScript'],
  //   repoUrl: 'https://github.com/laisrod/project-name',
  //   demoUrl: 'https://project-name.vercel.app/',
  //   imageAlt: 'Project screenshot',
  //   featured: false,
  // },
]

function Projects() {
  return (
    <SectionWrapper id="projects" className="projects">
      <h2 className="projects__title">./Projects</h2>

      <p className="projects__intro">
        These are some of the web projects I've built for learning, experimenting,
        or just to see if I could. Each one taught me something new and gave me a
        chance to work with different ideas and technologies.
      </p>

      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Projects
