# Ascencia Malta

Static three-page website for the frontend assignment. Built with React and plain CSS. There is no backend and no UI framework.

Pages: Home, About us, and Contact.

## Setup

```bash
npm install
npm run dev
```

Open the local address Vite prints, usually `http://localhost:5173`.

Programme, campus, and team images load from `VITE_IMAGE_BASE_URL` in `.env`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — create a production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Project layout

- `src/pages` — one component per route
- `src/components/layout` — header, footer, and logo
- `src/components/ui` — shared Button, Section, and page banner
- `src/components/home`, `about`, `contact` — sections used by each page
- `src/data` — navigation, copy, and image paths
- `src/hooks` — page title and contact form state
- `src/utils` — contact form validation
- `src/styles` — global styles and the campus gallery
