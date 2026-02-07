# adam-bron-dot-com

A personal time-capsule website for publishing selected Obsidian notes as a calm, static site.

## The Problem

- Writing in Obsidian should stay messy and honest, without being forced into blog structure.
- A public archive is needed without engagement optimisation or portfolio polish.
- Most templates push categories, timelines, and narratives that do not fit a time-capsule approach.
- Publishing needs a simple, explicit gate so only intentional notes go live.

Common alternatives were insufficient because they prioritise presentation and taxonomy over a light, writing-first workflow.

## The Approach

- **Inputs:** Markdown notes stored in `notes/`, optional frontmatter, and local images.
- **Processing:** Astro loads the notes as a content collection, filters to `public: true` with required fields, and copies images into `public/images` during dev and build.
- **Outputs:** A static site with individual capsule pages, tag pages, RSS and sitemap.

## Demo

- Add screenshot: docs/images/demo.png
- Live site (if deployed): https://adambron.com

## Value Delivered

- Keeps writing workflow in Obsidian, with the site acting as a projection layer.
- Makes publishing explicit via a single `public: true` flag.
- Produces a static output that is fast to host and low maintenance.
- Supports long-lived, honest time capsules without forcing categorisation.

## Scope & Status

- **Project type:** Production (personal website)
- **Current state:** Active
- **Known limitations:**
  - No categories or sections by default.
  - No comments or community features.
  - Not designed for multi-author publishing.
- **Out of scope:** This project does not attempt to be a portfolio, newsletter, or marketing site.

## Tech Stack

- Astro 5, MDX
- TypeScript
- Tailwind CSS
- AstroWind integration
- Node.js

## Getting Started

### Prerequisites

- Node.js `^18.17.1 || ^20.3.0 || >= 21`
- npm
- A `notes/` directory with Markdown files you want to publish

### Install

```bash
npm install
```

### First Run

```bash
npm run dev
```

## Usage

Create a new capsule in `notes/` with minimal frontmatter:

```yaml
---
title: "A capsule title"
date: 2026-01-18
public: true
---
```

Then run the dev server:

```bash
npm run dev
```

Images stored inside `notes/` are copied into `public/images` when running `npm run dev` or `npm run build`.

## Configuration

- Site metadata, analytics, and blog settings live in `src/config.yaml`.
- No required environment variables are defined in this repo.

## Project Structure

```text
notes/                Source markdown capsules
public/images/        Copied images for published notes
scripts/              Build helpers, including image copy
src/                  Astro site, components, layouts, utilities
```

## Testing

Tests: not implemented.

## Roadmap

Next:
- Add a real demo screenshot in `docs/images/demo.png`.
- Add a `LICENSE` file to clarify reuse.
- Add a short authoring guide for capsule frontmatter.

Later:
- Add optional content lenses, such as year-based views, when needed.
- Improve image handling and optimisation for large note libraries.

## License

License: not specified. Add a `LICENSE` file to define reuse terms.

## Credits / Acknowledgements

- Built with Astro and AstroWind.
- Writing workflow powered by Obsidian.

## Contact / Support

- Open a GitHub issue for bugs or questions.
- Website: https://adambron.com
