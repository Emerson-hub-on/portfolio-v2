# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal portfolio site built with Nuxt 4, Vue 3 and Tailwind. It has no backend or database: all content lives in one TypeScript file. It is deployed on Vercel (`vercel.json` runs `npm run build`), and every push to `main` redeploys it. UI text and component names are in Portuguese (pt-BR). Keep new user-facing strings in Portuguese.

## Commands

```bash
npm install
npm run dev       # dev server at http://localhost:3000
npm run build     # production build (.output/)
npm run preview   # serve the production build
npm run generate  # static generation
```

There are no tests, linter or formatter configured. Run `npx nuxi typecheck` to type-check (it needs `vue-tsc` installed).

## Architecture

**Content:** `app/data/portfolio.ts` is the only content source. It exports plain objects and arrays (`intro`, `hero`, `about`, `projects`, `skillCategories`, `otherTechs`, `experiences`, `contact`). The section components import them directly with `import { … } from '~/data/portfolio'`. There is no composable or fetching layer. To change what the site shows, edit that file. To add a new field, add it there and use it in the matching section.

**Public site:** `app/pages/index.vue` shows an intro screen. The sections (`app/components/sections/*`, auto-imported as `SectionsHero`, `SectionsSobre`, …) are only rendered after the visitor clicks "Conhecer" (`v-if="!showIntro || revealing"`), so they are not in the server-rendered HTML. Checking the page with curl won't show section content. You need a browser click to see it.

**Contact icons:** the social icons in `Contato.vue` are inline components built with `render: () => h('svg', …)`. Don't define components with a `template:` string. Nuxt ships without the runtime template compiler, so those components render nothing.

**History:** an earlier version used Supabase plus an `/admin` CMS. That code is kept on the `admin-supabase` branch.

**Styling:** The theme lives in `tailwind.config.js`: `dark-950…600` and `accent` colors, `font-display` (Syne), `font-body` (DM Sans) and `font-mono` (JetBrains Mono), and the component classes `.section-label`, `.section-title`, `.card-dark` and `.glow-line`. The design mixes dark and light on purpose. The intro and Hero are dark. The page background is white (`bg-white` on the root `div` in `app/layouts/default.vue`), so Sobre, Skills and Contato are white, and Projetos and Experiência are gray because of a translucent `bg-dark-900/30–40` overlay. Cards stay dark (`.card-dark`) with light text. Text placed directly on a light section must be dark (`.section-title` is `text-gray-900`; body copy uses `text-gray-600/700`). Fonts load through `app.head` in `nuxt.config.ts`. Many components also use hard-coded hex values (`#7c6aff`, `#050508`, `#00e5cc`) in scoped CSS.

## Gotchas (Nuxt 4 directory layout)

In Nuxt 4 the source directory is `app/`, and `~` resolves to `app/`. Layouts, plugins, pages, components, composables and middleware must live under `app/` (for example `app/layouts/`), or Nuxt silently ignores them.
- `app/layouts/default.vue` holds the navbar and footer. It wraps every page through `<NuxtLayout>` in `app.vue`.
- `assets/css/main.css` at the repo root isn't referenced anywhere (there's no `css:` entry in `nuxt.config.ts`). Its classes are duplicated in the Tailwind plugin.
- The `content` globs in `tailwind.config.js` point at root-level `components/`, `pages/` and so on. Styling still works because `@nuxtjs/tailwindcss` adds the `app/` paths itself.

## Repository hygiene

`.gitignore` lists only `node_modules`, but `node_modules/`, `.nuxt/` and `.output/` are still tracked in git. The local `node_modules` is stale and incomplete, so builds can fail locally even when Vercel (which reinstalls from scratch) succeeds. To test a build, use a fresh `npm install` in a clean copy, or untrack `node_modules` first. Don't hand-edit `.nuxt/` or `.output/`, because they are generated. Stage only the source files you changed, so that build output doesn't end up in commits.
