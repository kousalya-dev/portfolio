# Kousalya Sathyamoorthy — Portfolio

Personal portfolio built with **React + Vite**: interactive particle background, a working terminal in the hero, animated stats, an expandable experience timeline and project cards with cursor spotlight.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Edit the content

Everything (bio, experience, skills, projects, links) lives in [`src/data.js`](src/data.js). To show a LinkedIn link, set `linkedin` there.
The résumé PDF is served from `public/Kousalya_Sathyamoorthy_Resume.pdf` — replace it to update the download.

## Deploy to Vercel

Import the repo at vercel.com/new. Vercel auto-detects Vite (build: `npm run build`, output: `dist`) — no config needed.
