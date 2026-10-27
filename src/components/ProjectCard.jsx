export default function ProjectCard({ project }) {
  const { title, subtitle, description, image, imageAlt, tags, live } = project

  return (
    <article className="card">
      <img
        className="card__image"
        src={image}
        alt={imageAlt}
        width="1200"
        height="550"
        loading="lazy"
        decoding="async"
      />
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__subtitle">{subtitle}</p>
        <p className="card__text">{description}</p>

        {tags.length > 0 && (
          <ul className="tags" aria-label={`Technologies used in ${title}`}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        <div className="card__actions">
          <a
            className="btn btn--primary btn--sm"
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo of ${title} (opens in a new tab)`}
          >
            Live demo
          </a>
        </div>
      </div>
    </article>
  )
}
