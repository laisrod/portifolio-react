function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__text">
          &copy; {currentYear} Laís Rodrigues. Built with React + TypeScript + Ruby on Rails.
        </p>
        <div className="footer__links">
          <a
            href="https://github.com/laisrod"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/devlaisrodrigues/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:devlaisrodrigues@gmail.com"
            className="footer__link"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
