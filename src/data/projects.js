// Project cards are built from this list. To add, remove or reorder a
// project, edit it here.
//
// Descriptions use only what each live site says about itself. The
// technology tags come from you.

export const projects = [
  {
    id: 'fyp-repository',
    title: 'FYP Repository',
    subtitle: 'Final year project topics platform',
    description:
      'A platform for students, supervisors and administrators to search, discover and submit final year project topics. Topics can be searched by keyword, department or year.',
    image: '/images/fyp-repository.webp',
    imageAlt:
      'Home page of the FYP Repository website with a search section for project topics',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    live: 'https://fyp-repository-beta.vercel.app/',
  },
  {
    id: 'platewise',
    title: 'PlateWise',
    subtitle: 'AI meal recommendation',
    description:
      'A final year project that matches Nigerian meals to a user’s age, health conditions and allergies.',
    image: '/images/platewise.webp',
    imageAlt:
      'Home page of PlateWise with the headline “Meals matched to your health”',
    tags: ['Python', 'Firebase'],
    live: 'https://ai-powered-meal-recommendation-system.onrender.com',
  },
  {
    id: 'rental-manager',
    title: 'Rental Manager',
    subtitle: 'Rental property, Maiduguri',
    description:
      'A tenant portal for browsing available rental properties in Maiduguri, with sections for payments and maintenance requests.',
    image: '/images/rental-manager.webp',
    imageAlt:
      'Rental Manager tenant dashboard listing available properties with monthly prices and Apply buttons',
    tags: ['React', 'Firebase'],
    live: 'https://rental-property-maiduguri.web.app/',
  },
]
