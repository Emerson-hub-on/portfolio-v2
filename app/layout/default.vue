<template>
  <div class="min-h-screen">
    <!-- Navbar -->
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="scrolled ? 'bg-dark-950/90 backdrop-blur-md border-b border-dark-700' : ''"
    >
      <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <!-- Logo -->
        <a href="#hero" class="font-display font-bold text-xl tracking-tight">
          <span class="text-white">dev</span><span class="text-accent">.</span><span class="text-white">portfolio</span>
        </a>

        <!-- Desktop links -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="font-body text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group"
            >
              {{ item.label }}
              <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        </ul>

        <!-- CTA -->
        <a
          href="#contato"
          class="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/40 text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-200"
        >
          Contato
        </a>

        <!-- Mobile menu button -->
        <button
          class="md:hidden text-gray-400 hover:text-white"
          @click="menuOpen = !menuOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <!-- Mobile menu -->
      <div
        v-if="menuOpen"
        class="md:hidden bg-dark-900 border-t border-dark-700 px-6 py-4 flex flex-col gap-4"
      >
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="text-gray-300 hover:text-white font-body py-1"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </a>
      </div>
    </header>

    <!-- Page content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-dark-700 py-8 text-center text-gray-500 text-sm font-body">
      <p>Feito com Vue + Nuxt + Tailwind ♥</p>
    </footer>
  </div>
</template>

<script setup>
const scrolled = ref(false)
const menuOpen = ref(false)

const navItems = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'skills', label: 'Skills' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'contato', label: 'Contato' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})
</script>