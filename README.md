# codesbytobi — Portfolio

Personal portfolio for **Oluwatobi**, Senior Software Developer.
Converted from Next.js → **Vite + React 18 + TypeScript**.

---

## Tech Stack

| Layer     | Tech                                     |
|-----------|------------------------------------------|
| Framework | React 18 + Vite                          |
| Language  | TypeScript                               |
| Routing   | React Router v6                          |
| Styling   | CSS Custom Properties                    |
| Fonts     | Bebas Neue · DM Sans · Space Mono        |
| Deploy    | Vercel / Netlify                         |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed nav with scroll effect + mobile overlay
│   ├── Footer.tsx          # Footer with marquee ticker
│   └── ContactSection.tsx  # Reusable contact form
├── data/
│   └── portfolio.ts        # ALL site content lives here — just edit this!
├── pages/
│   ├── Home.tsx            # Hero · Stats · Services · Projects · Skills
│   ├── Services.tsx        # Services detail with alternating layout
│   ├── Work.tsx            # Portfolio grid
│   ├── WorkSingle.tsx      # Case study page
│   ├── Pricing.tsx         # Plans + FAQ
│   ├── Blog.tsx            # Blog listing
│   ├── BlogSingle.tsx      # Blog post
│   └── NotFound.tsx        # 404
├── App.tsx                 # Router
├── main.tsx                # Entry
└── index.css               # Design tokens + animations
```

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview build locally
```

---

## Customise Content

Everything is in `src/data/portfolio.ts`. Update projects, skills, pricing, blog posts — no need to touch components.

```ts
// Update your real projects
export const projects = [
  {
    title: "Your Project",
    category: "React / TypeScript",
    tech: ["React", "Laravel", "PostgreSQL"],
    image: "/imgs/your-project.png",  // put images in /public/
    description: "What this project does...",
    liveUrl: "https://yourproject.com",
  },
];
```

---

## Design Tokens

Edit `--accent` in `src/index.css` to retheme the entire site:

```css
:root {
  --bg: #080808;
  --accent: #c8f542;   /* ← change this */
  --text: #f2f2f2;
  --font-display: 'Bebas Neue', sans-serif;
  --font-mono: 'Space Mono', monospace;
}
```

---

## Deploy

### Vercel (recommended)
```bash
npx vercel --prod
```
Add `vercel.json` for SPA routing:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

### Netlify
Add `public/_redirects`:
```
/*  /index.html  200
```

---

## Connect Contact Form

Replace the `handleSubmit` stub in `ContactSection.tsx` with EmailJS or your Laravel API:

```ts
// EmailJS
import emailjs from '@emailjs/browser';
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');

// Laravel API
await fetch('https://yourapi.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

---

MIT License
