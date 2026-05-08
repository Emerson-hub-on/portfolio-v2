export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  supabase: {
    types: './types/supabase.ts',
    redirectOptions: {
      login: '/admin/login',
      callback: '/confirm',
      exclude: ['/', '/admin/login'],
    },
    clientOptions: {
      realtime: {
        params: {
          eventsPerSecond: -1,
        },
      },
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500&family=JetBrains+Mono&display=swap'
        }
      ]
    }
  }
})