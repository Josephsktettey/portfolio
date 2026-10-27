import { useState } from 'react'
import { profile, nav } from '../data/profile.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#top" onClick={close}>
          <img
            className="header__avatar"
            src={profile.avatar}
            alt=""
            width="42"
            height="42"
          />
          <span>{profile.name}</span>
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav
          id="site-nav"
          className={`header__nav${open ? ' is-open' : ''}`}
          aria-label="Main"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
