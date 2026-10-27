import Section from './Section.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="skills">
        {skillGroups.map((group) => (
          <li key={group.title} className="skill-group">
            <h3 className="skill-group__title">{group.title}</h3>
            {group.note && <p className="skill-group__note">{group.note}</p>}
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
