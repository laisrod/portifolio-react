import type { ProjectData } from '../types'

import palevaImg from '../assets/images/paleva.png'
import brazilianCinemaImg from '../assets/images/brazilian-cinema.jpg'
import constellationImg from '../assets/images/constellation.png'
import jokesAppImg from '../assets/images/jokes-app.jpg'

const PROJECTS: ProjectData[] = [
  {
    title: 'PaLeva: Full-Stack Restaurant Management',
    year: '2026',
    description:
      'A complete restaurant management platform built with React 19, TypeScript, and Rails 7.2. Features automated order lifecycle, real-time notifications via WebSockets, dual-role auth, analytics dashboard with charts, and dynamic menus with filters and schedules.',
    techs: [
      'React 19',
      'TypeScript',
      'Ruby on Rails',
      'Vite',
      'React Router v7',
      'CSS / BEM',
      'Rails 7.2',
      'REST API',
      'JWT',
      'WebSockets',
      'Docker',
      'RSpec',
    ],
    repoUrl: 'https://github.com/laisrod/PaLeva',
    demoUrl: 'https://pa-leva.vercel.app/login',
    imageUrl: palevaImg,
    imageAlt: 'PaLeva restaurant management application screenshot',
    featured: true,
  },
  {
    title: 'Brazilian Cinema: Movie Discovery Platform',
    year: '2025',
    description:
      'A movie discovery platform for Brazilian cinema with a Netflix-inspired login, movie poster mosaic, and redesigned Register/Welcome pages. Built with React 18, Redux Toolkit, and Firebase Auth. Features infinite scroll, advanced filters, watch providers integration, movie detail pages, and role-based protected routes — all powered by the TMDb API.',
    techs: [
      'React 18',
      'TypeScript',
      'Redux Toolkit',
      'Vite',
      'React Router v6',
      'Firebase Auth',
      'TMDb API',
      'Storybook',
      'Vitest',
      'RTL',
      'CSS / BEM',
    ],
    repoUrl: 'https://github.com/laisrod/S7-BrazilianFilms',
    demoUrl: 'https://s7-brazilian-films.vercel.app/',
    imageUrl: brazilianCinemaImg,
    imageAlt: 'Brazilian Cinema movie discovery application screenshot',
    featured: false,
  },
  {
    title: 'Constellation: Family Constellations Therapy',
    year: '2025',
    description:
      'A responsive single-page website for a family constellation therapy practice. Features scroll-based navigation, animated sections with WOW.js, filterable portfolio gallery with CubePortfolio, client testimonials carousel with Owl Carousel, embedded Google Maps, and a contact form powered by Formspree.',
    techs: [
      'HTML5',
      'CSS3',
      'Bootstrap 4',
      'jQuery',
      'WOW.js',
      'Owl Carousel',
      'CubePortfolio',
      'Formspree',
      'Google Maps',
    ],
    repoUrl: 'https://github.com/laisrod/constellation',
    demoUrl: 'https://nicolienvansanten.nl/',
    imageUrl: constellationImg,
    imageAlt: 'Constellation family therapy website screenshot',
    featured: false,
  },
  {
    title: 'Jokes App: Productivity with Humor',
    year: '2025',
    description:
      'An interactive web app that displays random jokes from two external APIs (icanhazdadjoke and Chuck Norris API) with automatic fallback if one source is unavailable. Users can rate each joke with emojis (😒 😐 😂), and the app shows real-time weather based on browser geolocation using Open-Meteo and BigDataCloud APIs.',
    techs: [
      'TypeScript',
      'REST APIs',
      'Jest',
      'Geolocation API',
      'Service Architecture',
      'CSS3',
      'Vercel',
    ],
    repoUrl: 'https://github.com/laisrod/Joke-Web-App',
    demoUrl: 'https://joke-web-app-69n6.vercel.app/',
    imageUrl: jokesAppImg,
    imageAlt: 'Jokes App interactive web application screenshot',
    featured: false,
  },
]

export function useProjects() {
  return { projects: PROJECTS }
}
