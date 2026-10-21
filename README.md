# Tesfamichael Aboset — Portfolio

Personal portfolio of **Tesfamichael Aboset**, Senior DevOps Engineer in Addis Ababa, Ethiopia, and builder of [usend.et](https://usend.et) and [kcdk.et](https://kcdk.et).

Terminal-style design with a colorblind-safe palette (Okabe-Ito sky blue + orange), so meaning never depends on telling red from green.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · React Router

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content

Almost everything lives in [`src/data/portfolio.ts`](src/data/portfolio.ts): profile, skills, projects, experience, certifications and contact links. Empty contact fields are hidden automatically.

Colors are defined once in [`tailwind.config.js`](tailwind.config.js).

## Contact form

The form uses [Web3Forms](https://web3forms.com). Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_KEY`.

## Deploy

`vercel.json` is included for one-click deployment on Vercel (SPA rewrites configured).

## Credits

Based on the [devops-portfolio](https://github.com/neerajnakka/devops-portfolio) template by Neeraj Chandra Nakka.
