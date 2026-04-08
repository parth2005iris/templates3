# Flowdesk — SaaS Landing Page Template

A production-quality, fully responsive SaaS landing page template built with **React + Vite + Tailwind CSS**. Inspired by the clean aesthetics of Linear, Vercel, and Stripe.

## Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI library |
| [Vite 5](https://vitejs.dev) | Dev server & bundler |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling |
| [Lucide React](https://lucide.dev) | Icons |

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the page.

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project structure

```
iris-template-saas/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky, transparent-to-solid navbar
│   │   ├── Hero.jsx            # Dark hero with product mockup + email capture
│   │   ├── Logos.jsx           # "Trusted by" logo strip
│   │   ├── Features.jsx        # 6-up feature card grid
│   │   ├── HowItWorks.jsx      # 3-step numbered process
│   │   ├── Pricing.jsx         # 3-tier pricing (Free / Pro / Enterprise)
│   │   ├── Testimonials.jsx    # 4 customer quotes
│   │   ├── FAQ.jsx             # Accordion FAQ
│   │   └── Footer.jsx          # Multi-column footer
│   ├── pages/
│   │   └── Home.jsx            # Single-page layout assembling all sections
│   ├── data/
│   │   └── content.js          # All copy & data in one place — edit here
│   ├── hooks/
│   │   └── useInView.js        # IntersectionObserver hook for scroll animations
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind directives + custom animation utilities
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customisation

### Changing the brand name / copy
All content lives in **`src/data/content.js`**. Update the strings there — no need to touch component files.

### Changing colours
The brand palette is defined in **`tailwind.config.js`** under `theme.extend.colors.brand`. The default is indigo (`#4f46e5`). Replace the hex values to match your brand.

### Scroll animations
Sections use the `reveal` and `reveal-stagger` CSS utility classes (defined in `index.css`) toggled by the `useInView` hook. Wrap any element with `className="reveal"` and attach the `ref` returned by `useInView()` to get a one-time fade-up on scroll.

### Adding sections
1. Create a new component in `src/components/`.
2. Add any static data to `src/data/content.js`.
3. Import and add the component to `src/pages/Home.jsx`.

## Design tokens

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#4f46e5` | CTAs, icons, accents |
| Dark hero bg | `#09090b` | Hero section |
| Light bg | `#ffffff` / `#f4f4f5` | Content sections |
| Font | Inter | All text |

## License

MIT — free to use, modify, and ship in personal or commercial projects.
