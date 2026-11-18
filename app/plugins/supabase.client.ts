
import { defineNuxtPlugin } from 'nuxt/app'
import ws from 'ws'

export default defineNuxtPlugin(() => {
  // Apenas polyfill para Node.js < 22
  if (!globalThis.WebSocket) {
    globalThis.WebSocket = ws as unknown as typeof WebSocket
  }
})