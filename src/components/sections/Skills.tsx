import SectionWrapper from '../layout/SectionWrapper'

function Skills() {
  return (
    <SectionWrapper id="skills" className="skills">
      <h2 className="skills__title">./The Technologies I Use</h2>

      <div className="skills__content">
        <p className="skills__paragraph">
          In my projects, I focus on building applications that feel clear,
          engaging, and purposeful. I work with modern tools across the full
          stack — from React and TypeScript on the frontend to Ruby on Rails
          and Node.js on the backend — where performance and developer
          experience complement each other.
        </p>

        <p className="skills__paragraph">
          My process blends clean architecture, testing, and usability. I enjoy
          exploring how subtle details — type safety, component patterns, API
          design, or responsive layouts — can shape how people perceive and use
          a product.
        </p>

        <p className="skills__paragraph">
          I also hold hands-on experience with TDD, Docker, CI/CD pipelines,
          and real-time features with WebSockets. This background allows me to
          approach each project from both a creative and analytical perspective,
          ensuring the final result feels intuitive and meaningful.
        </p>
      </div>
    </SectionWrapper>
  )
}

export default Skills
