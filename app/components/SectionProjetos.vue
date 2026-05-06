<template>
  <section id="projetos" class="py-28 relative">
    <!-- Section bg accent -->
    <div class="absolute inset-0 bg-dark-900/40" />

    <div class="relative max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="section-label mb-4">Portfolio</p>
        <h2 class="section-title">Projetos em destaque</h2>
      </div>

      <!-- Filter tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button
          v-for="tag in ['Todos', ...allTags]"
          :key="tag"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          :class="activeTag === tag
            ? 'bg-accent text-white'
            : 'bg-dark-800 text-gray-400 hover:text-white border border-dark-600'"
          @click="activeTag = tag"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="project in filteredProjects"
          :key="project.title"
          class="group card-dark overflow-hidden hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Thumbnail -->
          <div class="relative h-48 bg-dark-700 overflow-hidden">
            <div
              class="absolute inset-0 flex items-center justify-center text-6xl"
              :style="`background: linear-gradient(135deg, ${project.color}20, ${project.color}05)`"
            >
              {{ project.emoji }}
            </div>
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-dark-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="px-4 py-2 bg-accent text-white text-sm rounded-lg font-medium hover:bg-accent/80 transition-colors"
              >
                Ver Demo
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="px-4 py-2 bg-dark-700 text-white text-sm rounded-lg font-medium hover:bg-dark-600 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="font-display font-bold text-lg text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ project.description }}</p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-700 text-gray-300 border border-dark-600"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'E-commerce Dashboard',
    description: 'Painel administrativo completo com gráficos em tempo real, gestão de pedidos e relatórios.',
    emoji: '📊',
    color: '#7c6aff',
    tags: ['Vue 3', 'Pinia', 'Chart.js', 'Tailwind'],
    demo: '#',
    github: '#',
  },
  {
    title: 'App de Clima',
    description: 'PWA de previsão do tempo com animações baseadas nas condições climáticas e geolocalização.',
    emoji: '🌤️',
    color: '#00e5cc',
    tags: ['Nuxt', 'OpenWeather API', 'GSAP'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Landing Page SaaS',
    description: 'Página de vendas de alta conversão com animações de scroll e seções interativas.',
    emoji: '🚀',
    color: '#ff6b6b',
    tags: ['Nuxt', 'Tailwind', 'GSAP', 'SEO'],
    demo: '#',
    github: null,
  },
  {
    title: 'Sistema de Design',
    description: 'Biblioteca de componentes reutilizáveis com documentação interativa e Storybook.',
    emoji: '🎨',
    color: '#ffd93d',
    tags: ['Vue 3', 'Storybook', 'TypeScript'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Blog Pessoal',
    description: 'Blog com conteúdo em Markdown, modo escuro, RSS feed e 100 no Lighthouse.',
    emoji: '✍️',
    color: '#6bcb77',
    tags: ['Nuxt Content', 'Markdown', 'SEO'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Clone do Figma',
    description: 'Editor colaborativo de design com canvas infinito, múltiplas formas e exportação SVG.',
    emoji: '🖌️',
    color: '#a78bfa',
    tags: ['Vue 3', 'Canvas API', 'WebSockets'],
    demo: '#',
    github: '#',
  },
]

const activeTag = ref('Todos')

const allTags = computed(() => {
  const tags = new Set()
  projects.forEach(p => p.tags.forEach(t => tags.add(t)))
  return [...tags].slice(0, 6)
})

const filteredProjects = computed(() => {
  if (activeTag.value === 'Todos') return projects
  return projects.filter(p => p.tags.includes(activeTag.value))
})
</script>