# Emrah Şahin — Personal Portfolio

Bilingual (Turkish / English) personal portfolio website built with **Next.js 14** (App Router). Features a dual-mode interface combining an interactive **iOS 18 iPhone Experience** (default) with a **Classic Web Portfolio** and an **MDX Blog**.

## Features

### Dual-Mode Interface (`ViewModeContext`)
- **iOS 18 iPhone Experience (Default)**: Fresh browser tab sessions start inside an interactive iPhone 16 Pro UI.
- **Classic Web Mode**: Traditional scrollable portfolio layout, accessible via the **Classic Web** app icon, Safari's **Full Screen / Expand Web** button, or **Settings**.
- **Seamless Persistence**: View mode persists across locale switches via `sessionStorage`, and can be switched back to iOS at any time via the **iPhone Mode** button in the Navbar.
- **URL Overrides**: Supports `?mode=classic`, `?mode=web`, or `?mode=ios` query parameters.

### Interactive iOS 18 Experience
- **Device Frame & Dynamic Island**: Realistic iPhone 16 Pro frame (`IOSDeviceFrame`), status bar, expandable **Dynamic Island** (`IOSDynamicIsland`) with quick Safari launch, interactive home screen widgets, 4-column app grid, and frosted glass Dock.
- **4 Switchable Wallpapers**: `iOS 18 Dark`, `Aurora Borealis`, `Cyber Dark`, and `Sunset Glow` persisted in `localStorage`.
- **Built-in Interactive Apps**:

| App | Description |
|-----|-------------|
| **Safari** | Embeds the full Classic Web portfolio inside an interactive mobile browser with one-click Full Screen expansion. |
| **Notes** | Searchable career notes covering *About & Vision*, *Academic Background*, and *Internships & Experience*. |
| **Photos** | Filterable project showcase (`All Projects`, `AI & LLM`, `C++ & Java (OOP)`, `Web & Full-Stack`) with detail modals, GitHub links, and live demos. |
| **Skills (App Store)** | Categorized technical skills catalog (*Languages & OOP*, *AI, ML & Agentic Systems*, *Backend & Web*, *Data & Analytics*, *Tools & DevOps*). |
| **Mail** | Direct contact composer with quick templates, one-click email copy, a career milestones Inbox tab, and platform-aware deep-linking (iOS Gmail app URI with web fallback, Android native `mailto:`, Desktop Gmail web compose). |
| **Files** | iCloud Drive–style document viewer for CV/resume and TÜBİTAK 2209 thesis report. |
| **Phone** | Contact card with quick actions (Message, Mail, LinkedIn, GitHub) and location. |
| **Settings** | Language selector (`TR`/`EN`), wallpaper picker, Classic Web mode switcher, and device specs. |
| **Translate** | Dedicated bilingual switcher with one-click toggle and live translation preview. |
| **Classic Web** | One-tap home screen app to switch directly into the traditional web layout. |

- Also includes external home screen & Dock shortcuts to **GitHub** and **LinkedIn**.

### Classic Web Portfolio
- **Sections**: Hero, About (bio, education, spoken languages), Experience, Projects (displays top 3 by default with a Show More / Show Less toggle across 13 projects), Skills, and Contact.
- **Responsive Navigation**: Hide-on-scroll mobile Navbar with language switcher and iPhone Mode toggle.

### Bilingual & Blog Support
- **Bilingual (TR / EN)**: Powered by `next-intl` with locale-prefixed routing (`/tr`, `/en`), localized metadata, and seamless language switching.
- **MDX Blog**: Locale-specific posts under `content/blog/tr/` and `content/blog/en/` rendered with `next-mdx-remote` v6 and `gray-matter` (covering *AI Agents*, *Computer Vision*, and *Smart Homes*).
- **Design & SEO**: Dark glassmorphism UI, Framer Motion animations, Open Graph & Twitter card metadata, and canonical/alternate locale URLs.

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 14 (`14.2.35`, App Router) |
| Language | TypeScript 5 & React 18 |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 11 |
| i18n | `next-intl` 3 |
| Blog | `next-mdx-remote` v6 + `gray-matter` |
| Icons | Lucide React |
| Deploy | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/emrahsahn/personel-website.git
cd personel-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000/tr](http://localhost:3000/tr) or [http://localhost:3000/en](http://localhost:3000/en) (starts in the iOS 18 Experience by default). Append `?mode=classic` to open directly in Classic Web mode.

### Scripts

```bash
npm run dev     # Start development server
npm run build   # Create production build
npm start       # Start production server
npm run lint    # Run ESLint
```

## Project Structure

```text
app/
  [locale]/              # Locale-based routes (tr, en)
    blog/                # Blog list and [slug] post pages
    layout.tsx           # Locale layout, metadata, NextIntlClientProvider
    page.tsx             # Entry page rendering HomeClient
components/
  ios/                   # Interactive iOS 18 experience
    apps/                # Safari, Notes, Photos, Mail, Files, Phone, Settings, Skills, Translate
    IOSDeviceFrame.tsx   # iPhone frame, status bar, wallpaper container
    IOSDynamicIsland.tsx # Expandable Dynamic Island
    IOSHomeScreen.tsx    # Widgets, 4-column app grid, Dock
    IOSExperience.tsx    # Active app controller & transitions
    wallpapers.ts        # Wallpaper presets
  Hero.tsx, About.tsx, Experience.tsx, Projects.tsx, Skills.tsx, Contact.tsx, Navbar.tsx, ...
context/
  ViewModeContext.tsx    # View mode (ios/classic) & wallpaper state management
content/
  blog/                  # MDX blog posts (tr/, en/)
i18n/                    # next-intl routing and request config
lib/
  data.ts                # Education, experience, projects, skills, spoken languages
  site-config.ts         # Site metadata, social links, navigation links
  blog.ts                # MDX loading and frontmatter helpers
messages/                # Translation JSON files (tr.json, en.json)
public/                  # Static assets (icon.svg, safari.png)
middleware.ts            # next-intl locale middleware
```

## Adding Blog Posts

Create an MDX file under `content/blog/tr/` or `content/blog/en/`:

```mdx
---
title: "Post Title"
description: "Short description"
date: "2026-06-13"
---

Your content here...
```

## Deployment

The project is preconfigured for [Vercel](https://vercel.com) via `vercel.json`:

1. Import the GitHub repository on Vercel
2. Deploy (no extra configuration required)

## Author

**Emrah Şahin** — Software Engineer | LLMs, Agentic AI & Full-Stack

- GitHub: [@emrahsahn](https://github.com/emrahsahn)
- LinkedIn: [emrah-şahin](https://www.linkedin.com/in/emrah-şahin-788799253)
- Instagram: [@shn__emrah](https://instagram.com/shn__emrah)
- Email: sahinemrah3344@gmail.com

## License

This project is private and intended for personal portfolio use.
