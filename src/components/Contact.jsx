import Section from './Section.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}`

  return (
    <Section id="contact" title="Contact">
      <p className="prose">
        I’m open to entry-level front-end roles, internships and freelance
        projects. The quickest way to reach me is email or WhatsApp.
      </p>
      <div className="hero__actions">
        <a className="btn btn--primary" href={`mailto:${profile.email}`}>
          Email me
        </a>
        <a
          className="btn btn--ghost"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Message on WhatsApp
        </a>
        <a
          className="btn btn--ghost"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className="muted contact__address">{profile.email}</p>
    </Section>
  )
}
