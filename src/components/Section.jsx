import useReveal from '../hooks/useReveal.js'

// A reusable page section: consistent spacing, heading and background.
// tone="alt" gives the section the soft grey background used for rhythm.

export default function Section({ id, title, tone, children }) {
  const headingId = `${id}-heading`
  const ref = useReveal()
  return (
    <section
      id={id}
      className={`section${tone === 'alt' ? ' section--alt' : ''}`}
      aria-labelledby={headingId}
    >
      <div className="container" ref={ref}>
        <h2 id={headingId} className="section__title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
