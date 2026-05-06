export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    server: {
      allowedHosts: ['prudishly-dynamite-festive.ngrok-free.dev']
    }
  }
})