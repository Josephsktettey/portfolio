import Section from './Section.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <Section id="about" title="About" tone="alt">
      <div className="prose">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
