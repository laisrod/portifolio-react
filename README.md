# Wine With Simo - Portfolio Website

A modern, wine-inspired portfolio website built with React, TypeScript, and Vite.

This project was redesigned to represent **Simona**, a digital wine content creator, with a clean white background and an elegant color palette based on deep reds, purples, and golden accents.

## Live Demo

- Production: https://wine-course-nu.vercel.app/

## Highlights

- Elegant hero section with interactive spotlight text effect (`react-spring`)
- Responsive layout optimized for desktop and mobile
- Four photo galleries with:
  - Card-based preview
  - Modal viewer
  - One-photo-at-a-time navigation
  - Keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`)
- Custom SVG wine-inspired visuals (including bottle icon pattern)
- Contact form integration with Formspree

## Tech Stack

- React 19
- TypeScript
- Vite 6
- CSS (BEM-style organization)
- `@react-spring/web` for subtle motion/interaction

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
    common/      # Shared interactive components
    layout/      # Header, footer, wrappers
    sections/    # Hero, About, Skills, Projects, Contact
    ui/          # Reusable UI primitives
  hooks/         # Custom hooks (form, theme, viewport)
  styles/        # Base tokens + component styles
  assets/images/ # Gallery and section images
```

## Deployment

This project is ready to deploy on Vercel.

Typical flow:

1. Push changes to your GitHub repository
2. Vercel auto-builds from the connected branch
3. Use **Redeploy** in Vercel dashboard when needed

## Notes

- Main branch currently contains the wine-course redesign and gallery interaction improvements.
- Two local gif files (`Peekportifolio.gif` and `portifolio.gif`) are not required for production.

