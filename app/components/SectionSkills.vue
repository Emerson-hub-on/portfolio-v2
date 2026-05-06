<template>
  <section id="skills" class="py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="section-label mb-4">Toolkit</p>
        <h2 class="section-title">Skills & Tecnologias</h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="category in skillCategories"
          :key="category.name"
          class="card-dark p-6 hover:border-accent/20 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-5">
            <span class="text-2xl">{{ category.icon }}</span>
            <h3 class="font-display font-bold text-white">{{ category.name }}</h3>
          </div>

          <div class="space-y-3">
            <div v-for="skill in category.skills" :key="skill.name">
              <div class="flex justify-between items-center mb-1.5">
                <span class="text-gray-300 text-sm font-medium">{{ skill.name }}</span>
                <span class="text-gray-500 text-xs font-mono">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 bg-dark-700 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000"
                  :style="`width: ${skill.level}%; background: linear-gradient(90deg, ${category.color}, ${category.color}99)`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech pill cloud -->
      <div class="mt-12 text-center">
        <p class="text-gray-500 text-sm font-mono mb-6">// também trabalho com</p>
        <div class="flex flex-wrap justify-center gap-3">
          <span
            v-for="tech in otherTechs"
            :key="tech"
            class="px-4 py-2 rounded-full text-sm bg-dark-800 text-gray-300 border border-dark-600 hover:border-accent/40 hover:text-white transition-all cursor-default"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    name: 'Frontend Core',
    icon: '🎯',
    color: '#7c6aff',
    skills: [
      { name: 'Vue.js / Nuxt', level: 90 },
      { name: 'React / Next.js', level: 75 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    name: 'Estilo & Design',
    icon: '🎨',
    color: '#00e5cc',
    skills: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'SASS / SCSS', level: 80 },
      { name: 'Figma', level: 70 },
      { name: 'CSS Animations', level: 75 },
    ],
  },
  {
    name: 'Ferramentas',
    icon: '⚙️',
    color: '#ff6b6b',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Vite / Webpack', level: 75 },
      { name: 'Jest / Vitest', level: 65 },
      { name: 'Docker (básico)', level: 50 },
    ],
  },
]

const otherTechs = [
  'Pinia', 'Vuex', 'GraphQL', 'REST API', 'Axios',
  'GSAP', 'Framer Motion', 'Storybook', 'ESLint', 'Prettier',
  'Vercel', 'Netlify', 'PWA', 'SEO', 'Web Vitals',
]
</script>