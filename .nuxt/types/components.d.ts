
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AdminField: typeof import("../../app/components/admin/Field.vue")['default']
  AdminPanelAbout: typeof import("../../app/components/admin/PanelAbout.vue")['default']
  AdminPanelContact: typeof import("../../app/components/admin/PanelContact.vue")['default']
  AdminPanelExperience: typeof import("../../app/components/admin/PanelExperience.vue")['default']
  AdminPanelHero: typeof import("../../app/components/admin/PanelHero.vue")['default']
  AdminPanelProjects: typeof import("../../app/components/admin/PanelProjects.vue")['default']
  AdminPanelSettings: typeof import("../../app/components/admin/PanelSettings.vue")['default']
  AdminPanelSkills: typeof import("../../app/components/admin/PanelSkills.vue")['default']
  AdminSection: typeof import("../../app/components/admin/Section.vue")['default']
  SectionsContato: typeof import("../../app/components/sections/Contato.vue")['default']
  SectionsExperiencia: typeof import("../../app/components/sections/Experiencia.vue")['default']
  SectionsHero: typeof import("../../app/components/sections/Hero.vue")['default']
  SectionsProjetos: typeof import("../../app/components/sections/Projetos.vue")['default']
  SectionsSkills: typeof import("../../app/components/sections/Skills.vue")['default']
  SectionsSobre: typeof import("../../app/components/sections/Sobre.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAdminField: LazyComponent<typeof import("../../app/components/admin/Field.vue")['default']>
  LazyAdminPanelAbout: LazyComponent<typeof import("../../app/components/admin/PanelAbout.vue")['default']>
  LazyAdminPanelContact: LazyComponent<typeof import("../../app/components/admin/PanelContact.vue")['default']>
  LazyAdminPanelExperience: LazyComponent<typeof import("../../app/components/admin/PanelExperience.vue")['default']>
  LazyAdminPanelHero: LazyComponent<typeof import("../../app/components/admin/PanelHero.vue")['default']>
  LazyAdminPanelProjects: LazyComponent<typeof import("../../app/components/admin/PanelProjects.vue")['default']>
  LazyAdminPanelSettings: LazyComponent<typeof import("../../app/components/admin/PanelSettings.vue")['default']>
  LazyAdminPanelSkills: LazyComponent<typeof import("../../app/components/admin/PanelSkills.vue")['default']>
  LazyAdminSection: LazyComponent<typeof import("../../app/components/admin/Section.vue")['default']>
  LazySectionsContato: LazyComponent<typeof import("../../app/components/sections/Contato.vue")['default']>
  LazySectionsExperiencia: LazyComponent<typeof import("../../app/components/sections/Experiencia.vue")['default']>
  LazySectionsHero: LazyComponent<typeof import("../../app/components/sections/Hero.vue")['default']>
  LazySectionsProjetos: LazyComponent<typeof import("../../app/components/sections/Projetos.vue")['default']>
  LazySectionsSkills: LazyComponent<typeof import("../../app/components/sections/Skills.vue")['default']>
  LazySectionsSobre: LazyComponent<typeof import("../../app/components/sections/Sobre.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
