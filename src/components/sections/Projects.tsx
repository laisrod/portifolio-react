import { useState, useCallback } from 'react'
import SectionWrapper from '../layout/SectionWrapper'
import ProjectCard from '../common/ProjectCard'
import { useProjects } from '../../hooks/useProjects'

const VISIBLE_COUNT = 2

function Projects() {
  const { projects } = useProjects()
  const [showAll, setShowAll] = useState(false)

  const hiddenCount = projects.length - VISIBLE_COUNT
  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT)

  const handleToggle = useCallback(() => {
    setShowAll((prev) => !prev)
  }, [])

  return (
    <SectionWrapper id="projects" className="projects">
      <h2 className="projects__title">./Projects</h2>

      <p className="projects__intro">
        These are some of the web projects I've built for learning, experimenting,
        or just to see if I could. Each one taught me something new and gave me a
        chance to work with different ideas and technologies.
      </p>

      <div className="projects__grid">
        {visibleProjects.map((project, index) => (
          <div
            key={project.title}
            className={`projects__item ${
              showAll && index >= VISIBLE_COUNT ? 'projects__item--reveal' : ''
            }`}
            style={
              showAll && index >= VISIBLE_COUNT
                ? { animationDelay: `${(index - VISIBLE_COUNT) * 120}ms` }
                : undefined
            }
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {hiddenCount > 0 && (
        <button
          type="button"
          className="projects__toggle"
          onClick={handleToggle}
          aria-expanded={showAll}
        >
          <span className="projects__toggle-text">
            {showAll ? 'Show less' : `View all projects (${hiddenCount} more)`}
          </span>
          <svg
            className={`projects__toggle-icon ${showAll ? 'projects__toggle-icon--flipped' : ''}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      )}
    </SectionWrapper>
  )
}

export default Projects
