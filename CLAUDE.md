# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal portfolio site with a built-in CMS. It runs on Nuxt 4, Vue 3 and Tailwind, and it stores all content in Supabase. It is deployed on Vercel (`vercel.json` runs `npm run build`). UI text and component names are in Portuguese (pt-BR). Keep new user-facing strings in Portuguese.

## Commands

```bash
npm install
npm run dev       # dev server at http://localhost:3000
npm run build     # production build (.output/)
npm run preview   # serve the production build
npm run generate  # static generation
```

There are no tests, linter or formatter configured. Run `npx nuxi typecheck` to type-check (it needs `vue-tsc` installed).

The app needs `SUPABASE_URL` and `SUPABASE_KEY` in `.env`. The `@nuxtjs/supabase` module reads them.

## Architecture

**Data flow:** Supabase is the only content source. All database access goes through one composable, `app/composables/usePortfolioData.ts`, which exposes fetch/update/upsert/delete functions for each table. When you add a field or table, update `types/supabase.ts` (the generated `Database` type, which `nuxt.config.ts` points the supabase module at), then the composable, then the public section and the admin panel.

**Tables:** `hero`, `about` and `contact` are single-row tables. They are read with `.single()`, and their `update*` functions look up the row's id first and only update. They never insert, so the row must already exist. `projects`, `skill_groups`, `skills`, `skill_tags` and `experiences` are lists sorted by `order_index`, and they are saved with `upsert`. `skills` belong to `skill_groups`, fetched as `skill_groups.select('*, skills(*)')`. `fetchProjects` returns only `visible = true` rows, so the admin panel also never sees hidden projects.

**Public site:** `app/pages/index.vue` shows an intro/reveal screen, then renders `app/components/sections/*` (auto-imported as `SectionsHero`, `SectionsSobre`, …). Each section calls the composable with top-level `await` in `<script setup>`, so data is fetched during SSR.

**Admin CMS:** `/admin/login` uses Supabase email/password auth. `/admin` (`app/pages/admin/index.vue`) is guarded by `app/middleware/auth.ts` plus the supabase module's `redirectOptions`. Only `/` and `/admin/login` are public. The admin page owns all state. It loads every table in `onMounted`, passes refs as props to the `app/components/admin/Panel*.vue` components, and those components **mutate the props directly** (`v-model` on prop fields). The panels emit events only for add/remove/upload. A single "Salvar" button calls `save()`, which persists **only the active tab**, one row at a time. Removing a list item deletes it from the database immediately, not on save. Array fields (`tags`) are edited as a comma-separated `tagsInput` string and split again in `save()`. The profile photo uploads to the Supabase Storage bucket `portfolio` at `profile/photo.<ext>`.

**Styling:** The theme lives in `tailwind.config.js`: `dark-950…600` and `accent` colors, `font-display` (Syne), `font-body` (DM Sans) and `font-mono` (JetBrains Mono), and the component classes `.section-label`, `.card-dark` and `.glow-line`. Fonts load through `app.head` in `nuxt.config.ts`. Many components also use hard-coded hex values (`#7c6aff`, `#050508`, `#00e5cc`) in scoped CSS.

## Gotchas (Nuxt 4 directory layout)

In Nuxt 4 the source directory is `app/`. Layouts, plugins, pages, components, composables and middleware must live under `app/` (for example `app/layouts/`, `app/plugins/`), or Nuxt silently ignores them.
- `app/layouts/default.vue` holds the navbar and footer. It wraps the public page through `<NuxtLayout>` in `app.vue`, and the admin pages opt out with `layout: false`.
- `app/plugins/supabase.client.ts` is a `ws` WebSocket polyfill for Node < 22. Because it is client-only, it has no effect in practice (browsers always have `WebSocket`).
- `assets/css/main.css` at the repo root isn't referenced anywhere (there's no `css:` entry in `nuxt.config.ts`). Its classes are duplicated in the Tailwind plugin.
- The `content` globs in `tailwind.config.js` point at root-level `components/`, `pages/` and so on. Styling still works because `@nuxtjs/tailwindcss` adds the `app/` paths itself.

## Repository hygiene

`.gitignore` lists only `node_modules`, but `node_modules/`, `.nuxt/`, `.output/` and `.env` are all tracked in git anyway. Don't hand-edit `.nuxt/` or `.output/`, because they are generated. Stage only the source files you changed, so that build output doesn't end up in commits.
