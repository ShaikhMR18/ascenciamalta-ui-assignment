# Ascencia Malta

Static three-page website for the Frontend Developer assignment. Built with React, HTML, and plain CSS. It has no backend or API integration and does not use a UI framework.

## Assignment scope

The assignment is to create a fresh, responsive UI theme based on the Ascencia Business School website while keeping the Ascencia brand identity. The implementation covers these three pages:

- Home (`/`)
- About Us (`/about`)
- Contact (`/contact`)

The UI is designed to work on desktop, tablet, and mobile, with reusable React components and consistent spacing and typography.

## Setup

```bash
npm install
npm run dev
```

Open the local address Vite prints, usually `http://localhost:5173`.

Programme, campus, and team images load from `VITE_IMAGE_BASE_URL` in `.env`.

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - create a production build
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint

## Project layout

- `src/pages` - one component per route
- `src/components/layout` - header, footer, and logo
- `src/components/ui` - shared Button, Section, and page banner
- `src/components/home`, `about`, `contact` - sections used by each page
- `src/data` - navigation, copy, and image paths
- `src/hooks` - page title and contact form state
- `src/utils` - contact form validation
- `src/styles` - global styles and the campus gallery

## Assignment live URL



[https://ascenciamalta-ui.vercel.app](https://ascenciamalta-ui.vercel.app)
