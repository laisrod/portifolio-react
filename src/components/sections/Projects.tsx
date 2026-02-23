import SectionWrapper from '../layout/SectionWrapper'
import ProjectCard from '../common/ProjectCard'
import { useProjects } from '../../hooks/useProjects'

function Projects() {
  const { projects } = useProjects()

  return (
    <SectionWrapper id="projects" className="projects">
      <h2 className="projects__title">./Projects</h2>

      <p className="projects__intro">
        These are some of the web projects I've built for learning, experimenting,
        or just to see if I could. Each one taught me something new and gave me a
        chance to work with different ideas and technologies.
      </p>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Projects
