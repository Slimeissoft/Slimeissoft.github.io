# 🧊 Slimeissoft's Blog

> A personal blog & portfolio built with Vue 3 — featuring a glassmorphism design with an ice blue & lavender color scheme.

✨ **Live Demo**: [https://slimeissoft.github.io](https://slimeissoft.github.io)

---

## 🎨 Features

- **Vue 3 SPA** — Reactive, fast, single-page application
- **Glassmorphism UI** — Frosted glass effects with gradient orbs
- **Light / Dark Mode** — Toggle between themes freely
- **Responsive Design** — Looks great on desktop, tablet, and mobile
- **Multiple Pages** — Home, Articles, Timeline, About
- **No Build Step** — Pure CDN-based, deploy instantly

---

## 📂 Project Structure

```
slime-blog/
├── index.html          # Main HTML entry + Vue app
├── css/
│   └── style.css       # All styles: layout, glassmorphism, animations
├── js/
│   └── app.js          # Vue 3 app logic, data, and routing
└── README.md
```

---

## 🛠️ Tech Stack

| Category        | Technology                        |
|-----------------|-----------------------------------|
| Framework       | Vue 3 (CDN, Composition API style)|
| Styling         | Pure CSS (Flexbox, Grid, Custom Properties) |
| Fonts           | Outfit (UI), JetBrains Mono (code) |
| Icons           | Inline SVG (custom)               |
| Hosting         | GitHub Pages                      |

---

## 🌐 Pages

| Page     | Description                                      |
|----------|--------------------------------------------------|
| **Home** | Hero section with animated orbs + latest posts   |
| **Articles** | Full post listing with tag filters (coming soon) |
| **Timeline** | Personal journey and milestones               |
| **About**    | Bio, skills, and contact info                   |

---

## 🎨 Design Highlights

- **Color Palette**: Ice blue `#38bdf8` ↔ Lavender `#a78bfa` ↔ Accent pink `#f472b6`
- **Glassmorphism Cards**: `backdrop-filter: blur(20px)` with semi-transparent backgrounds
- **Ambient Orbs**: Soft gradient blobs that drift with CSS animation
- **Entrance Animations**: Staggered fade + translate on page load
- **Smooth Scrolling**: CSS scroll-behavior with custom scrollbar

---

## 🚀 Deploy to GitHub Pages

This project deploys automatically via GitHub Pages.

1. Push this repo to a `username.github.io` repository
2. Go to **Settings → Pages → Source** and select `main` branch
3. Your site will be live at `https://username.github.io`

No build tools, no `npm install` — just push and go!

---

## 📝 Customization Tips

### Change the Theme Colors

Edit the CSS custom properties in `css/style.css`:

```css
:root {
  --primary: #38bdf8;   /* Ice blue  */
  --secondary: #a78bfa; /* Lavender */
  --accent: #f472b6;    /* Pink      */
}
```

### Update Posts

Edit the `posts` array in `js/app.js`. Each post object supports:

```js
{
  id: 1,
  title: 'Post Title',
  tag: 'Vue.js',
  tagColor: '#60a5fa',
  date: '2025-01-15',
  readTime: '8 min read',
  excerpt: 'Short description...',
  content: '<h2>Full HTML content...</h2>'
}
```

### Add a New Page

1. Add a nav item in `navItems` (js/app.js)
2. Add a `<section>` in `index.html` with the matching `v-show`
3. Style it in `css/style.css`

---

## 📄 License

MIT License — feel free to use this as a template for your own blog!

---

*Made with 💜 by [Slimeissoft](https://github.com/Slimeissoft)*
