# Joseph Simon: Portfolio

A single-page portfolio built with React and Vite. No backend, no database, no API keys.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 20 or newer) and a terminal (the one inside VS Code works).

```bash
npm install      # downloads the packages (first time only)
npm run dev      # starts the site; open the address it prints (usually http://localhost:5173)
```

Other commands:

```bash
npm run build    # makes the production version in the "dist" folder
npm run preview  # previews that production version locally
```

## Where things are

```
index.html              page title, description and social tags (SEO)
public/favicon.svg      browser tab icon
public/robots.txt       tells search engines they may index the site
public/images/          project screenshots and your photos (WebP)
src/data/profile.js     your name, email, WhatsApp, GitHub and bio
src/data/projects.js    the project cards: text, links, tags, screenshots
src/data/skills.js      the skill groups
src/styles/tokens.css   colours, fonts and spacing, edit the look here
src/styles/base.css     resets, buttons and shared styles
src/styles/layout.css   header, hero, sections and footer
src/styles/components.css  project cards, skills, tags, scroll effect
src/components/         one file per part of the page
src/hooks/useReveal.js  the gentle fade-in when a section scrolls into view
src/App.jsx             puts the parts together
```

## Common edits

- **Change a detail** (email, bio, WhatsApp): edit `src/data/profile.js`.
- **Change your photo:** replace `public/images/joseph-hero.webp` (large, beside the intro) and `public/images/joseph-avatar.webp` (small and round, in the navigation bar) with new files of the same names.
- **Add a project:** save a screenshot in `public/images/`, then copy one block in `src/data/projects.js` and change its text, link, tags and the image's width and height.
- **Change the colours:** edit `src/styles/tokens.css`. The site uses a dark theme with orange accents. Keep `--color-accent` dark enough for white text on buttons, and `--color-accent-text` light enough to read on the dark background.
- **Change skills:** edit `src/data/skills.js`.

## Before you share the site

- Open every link on the live site, including each project's **Live demo** button, the email link and the WhatsApp button.
- Once you have a final web address, add an `og:url` and a preview image (`og:image`) to `index.html` so links look good when shared on WhatsApp and LinkedIn.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com), choose **Add New, Project** and import that repository.
3. Vercel detects Vite automatically (build command `npm run build`, output folder `dist`). Click **Deploy**.
4. Open the live address and check every link.

Every push to the main branch redeploys the site automatically.

## Notes

- No secrets or API keys are used or needed. Do not add any to this project.
- Your email and WhatsApp number are public on the site by design.
