# comica.dev

Personal portfolio built with Astro, deployed on Cloudflare Workers.

A modular, config-driven site: the homepage is composed from an ordered list
of sections, and content lives in config files (content collections).

## Project structure

```
src/
  site.config.ts       # identity, nav, socials, homepage section order
  content.config.ts    # schemas for projects / experiences / posts
  styles/global.css    # the design sheet (single source of style)
  components/
    sections/          # one component per section ("brick")
      Hero.astro
      About.astro
      Projects.astro
      Experience.astro
      Contact.astro
    Section.astro      # maps a section type -> its component
  content/
    projects/          # JSON/YAML config files, one per project
    experiences/       # JSON/YAML config files, one per role
    posts/             # Markdown/MDX, one per post
```

## Adding and ordering sections

Edit `sections` in `src/site.config.ts`. Each string maps to a component in
`src/components/sections/` (via `Section.astro`). Reorder the array to reorder
the page; remove an entry to drop a section.

To add a brand-new section, create `src/components/sections/MySection.astro`,
register it in `src/components/Section.astro`, and add its type to
`SectionType` in `src/site.config.ts`.

## Adding content

Projects and experiences are plain JSON/YAML config files. The shape is
defined (and validated) by the Zod schemas in `src/content.config.ts`.

**`src/content/projects/example.json`**

```json
{
  "title": "Project name",
  "description": "What it does.",
  "year": 2025,
  "link": "https://example.com",
  "repo": "https://github.com/you/repo",
  "stack": ["TypeScript", "Astro"],
  "featured": true,
  "accent": "blue"
}
```

**`src/content/experiences/example.json`**

```json
{
  "role": "Software Engineer",
  "company": "Acme",
  "start": "2021-03",
  "end": "2023-06",
  "description": "What you did.",
  "stack": ["React", "Node"],
  "accent": "pink"
}
```

`accent` accepts `"blue" | "pink" | "green" | "grey"` and picks the matching
pastel color from the design sheet. Omit `end` to show "Present".

Posts are Markdown/MDX files with frontmatter:

```md
---
title: "Hello"
description: "A post"
date: 2026-01-15
tags: ["writing"]
---

Body here.
```

## Commands

```sh
npm run dev       # local dev server
npm run build     # production build
npm run deploy    # deploy to Cloudflare Workers
```

## Astro documentation

See the [Astro documentation](https://docs.astro.build).
