// Single source of truth for personal details shown on the site.
// Change a value here and it updates everywhere it is used.

export const profile = {
  name: 'Joseph Simon',
  role: 'Front-End Developer',
  education: 'Computer Science graduate, University of Maiduguri',
  intro:
    'I build responsive web applications with HTML, CSS, JavaScript and React.',
  // Photos live in public/images/. avatar is the small round one in the
  // navigation bar; photo is the larger portrait beside the heading.
  avatar: '/images/joseph-avatar.webp',
  photo: '/images/joseph-hero.webp',
  email: 'josephsktettey@gmail.com',
  // International format without "+" or spaces, as WhatsApp links require.
  whatsappNumber: '2347047638539',
  github: 'https://github.com/Josephsktettey',
  about: [
    'I’m a Computer Science graduate from the University of Maiduguri with an interest in web development and building practical digital solutions. I have experience working with HTML, CSS, JavaScript, and React, and I’ve worked on projects focused on solving real-world problems.',
    'I’m continuously improving my skills and looking for opportunities to contribute, learn, and grow as a developer.',
  ],
}

export const nav = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
