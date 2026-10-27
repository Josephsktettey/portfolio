import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">{profile.education}</p>
          <h1 id="hero-heading" className="hero__title">
            {profile.name}
            <span className="hero__role">{profile.role}</span>
          </h1>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact me
            </a>
          </div>
        </div>

        <img
          className="hero__photo"
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width="477"
          height="597"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  )
}
