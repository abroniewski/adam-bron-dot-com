# adam-bron-dot-com

Personal website for Adam Broniewski, built with Astro and Tailwind CSS.

## The Problem

- A static portfolio website was needed that is fast, easy to maintain, and does not require a backend.
- WordPress and similar CMS platforms add unnecessary overhead for a personal site.
- The site needed to support content-driven pages with a clear design system.

## The Approach

**Inputs:** Written content, navigation configuration, design tokens.

**Processing:** Astro compiles pages at build time, pulling content from typed collections defined in `src/content/`. Tailwind CSS handles styling. Scripts in `scripts/` handle pre-build tasks such as copying assets.

**Outputs:** A static site deployed as plain HTML, CSS, and JavaScript.

## Value Delivered

- Zero-runtime-cost static site with fast page loads.
- Typed content collections reduce authoring errors.
- Tailwind-based design system makes visual updates consistent and quick.

## Scope & Status

- **Project type:** Personal website
- **Current state:** Active
- **Known limitations:**
  - No CMS; content updates require editing source files and rebuilding.
  - No blog or search functionality at this stage.

## Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Runtime:** Node.js 18+

## Who This Is For

Personal use. The repository is public for transparency and as a reference for others building Astro-based personal sites.

## Getting Started

```bash
npm install
npm run dev
npm run build
```

## Usage

```bash
npm run dev     # Local development server with hot reload
npm run build   # Production build
npm start       # Preview after build
```

## Roadmap

- Add blog and writing section.
- Add project portfolio page.
- Improve navigation structure.

## License

Not specified.
