import SectionWrapper from '../layout/SectionWrapper'
import Button from '../ui/Button'
import { useForm } from '../../hooks/useForm'
import type { ContactFormValues } from '../../types'

function Contact() {
  const { values, handleChange, handleSubmit, submitted } = useForm<ContactFormValues>({
    initialValues: { name: '', email: '', message: '' },
    onSubmit: (vals) => {
      const subject = encodeURIComponent(`Portfolio Contact from ${vals.name}`)
      const body = encodeURIComponent(
        `Name: ${vals.name}\nEmail: ${vals.email}\n\nMessage:\n${vals.message}`,
      )
      window.open(
        `mailto:devlaisrodrigues@gmail.com?subject=${subject}&body=${body}`,
        '_self',
      )
    },
  })

  return (
    <SectionWrapper
      id="contact"
      className="contact"
      subtitle="Let's work together"
      title="Get In Touch"
    >
      <div className="contact__grid">
        <div className="contact__info">
          <p className="contact__text">
            I'm currently open to new opportunities — whether it's a full-time
            role, freelance project, or just a conversation about tech. Feel free
            to reach out!
          </p>

          <ul className="contact__details">
            <li className="contact__detail">
              <svg className="contact__detail-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a href="mailto:devlaisrodrigues@gmail.com" className="contact__detail-link">
                devlaisrodrigues@gmail.com
              </a>
            </li>
            <li className="contact__detail">
              <svg className="contact__detail-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="contact__detail-text">Barcelona, Spain</span>
            </li>
            <li className="contact__detail">
              <svg className="contact__detail-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <a href="https://www.linkedin.com/in/devlaisrodrigues/" target="_blank" rel="noopener noreferrer" className="contact__detail-link">
                linkedin.com/in/devlaisrodrigues
              </a>
            </li>
            <li className="contact__detail">
              <svg className="contact__detail-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <a href="https://github.com/laisrod" target="_blank" rel="noopener noreferrer" className="contact__detail-link">
                github.com/laisrod
              </a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="contact-name" className="contact__label">Name</label>
            <input
              id="contact-name"
              type="text"
              className="contact__input"
              placeholder="Your name"
              required
              value={values.name}
              onChange={handleChange('name')}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-email" className="contact__label">Email</label>
            <input
              id="contact-email"
              type="email"
              className="contact__input"
              placeholder="your@email.com"
              required
              value={values.email}
              onChange={handleChange('email')}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-message" className="contact__label">Message</label>
            <textarea
              id="contact-message"
              className="contact__textarea"
              placeholder="Tell me about your project or opportunity..."
              rows={5}
              required
              value={values.message}
              onChange={handleChange('message')}
            />
          </div>

          <Button type="submit" variant="primary" disabled={submitted}>
            {submitted ? 'Message Sent ✓' : 'Send Message'}
          </Button>

          {submitted && (
            <p className="contact__success" role="status">
              Your email client should open shortly. Thank you!
            </p>
          )}
        </form>
      </div>
    </SectionWrapper>
  )
}

export default Contact
