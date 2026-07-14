# Akhtar Ali — Portfolio

A React + Vite + Tailwind portfolio built from your Figma design. Dark theme, purple/blue gradient accents, glassmorphic cards.

## Folder structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/          ← put your real photos/screenshots here (see README inside)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  ← ALL your text content lives here — edit this file to update the site
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## How to run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## How to edit content

Almost everything text-related — your name, bio, skills, projects, experience, testimonials, contact info — lives in **`src/data/portfolioData.js`**. You generally don't need to touch component files at all to update your info.

## How to add real images

Drop your files into `src/assets/images/` using the exact filenames listed in the README inside that folder (profile.jpg, project-doctor.jpg, etc.). The components are already wired to pull from those paths.

## How to deploy

This is a static Vite app, so it deploys easily to **Vercel** (recommended, since you already use it for Bg-Removal) or Netlify:

```bash
npm run build
```

This outputs a `dist/` folder — point Vercel at the repo and it auto-detects the Vite build settings (build command `npm run build`, output dir `dist`).

## Tech used

- React 18 + Vite
- Tailwind CSS (custom theme tokens in `tailwind.config.js`)
- lucide-react for icons
- No backend required for the contact form by default — wire `handleSubmit` in `Contact.jsx` to a service like Formspree, EmailJS, or your own Express API when ready.
