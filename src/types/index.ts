/* ============================================
   Shared TypeScript types
   ============================================ */

export type Theme = 'light' | 'dark'

export interface ProjectData {
  title: string
  year: string
  description: string
  techs: string[]
  repoUrl: string
  demoUrl: string
  imageAlt: string
  featured?: boolean
}

export interface NavLink {
  href: string
  label: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export type ContactFormValues = {
  name: string
  email: string
  message: string
}
