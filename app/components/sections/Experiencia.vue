<template>
  <section id="experiencia" class="py-28 relative">
    <div class="absolute inset-0 bg-dark-900/30" />

    <div class="relative max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="section-label mb-4">Trajetória</p>
        <h2 class="section-title">Experiência</h2>
      </div>

      <div class="max-w-2xl mx-auto">
        <!-- Timeline -->
        <div class="relative">
          <!-- Vertical line -->
          <div class="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-dark-600 to-transparent" />

          <div class="space-y-8">
            <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="relative pl-20"
            >
              <!-- Dot -->
              <div
                class="absolute left-[26px] top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                :class="index === 0 ? 'border-accent bg-accent/20' : 'border-dark-600 bg-dark-800'"
              >
                <div v-if="index === 0" class="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>

              <!-- Card -->
              <div class="card-dark p-6 hover:border-accent/20 transition-all duration-300">
                <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 class="font-display font-bold text-white text-lg">{{ exp.role }}</h3>
                    <p class="text-accent text-sm font-medium">{{ exp.company }}</p>
                  </div>
                  <span class="text-gray-500 text-xs font-mono bg-dark-700 px-3 py-1 rounded-full border border-dark-600">
                    {{ exp.period }}
                  </span>
                </div>

                <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ exp.description }}</p>

                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in exp.techs"
                    :key="tech"
                    class="px-2.5 py-1 text-xs font-mono rounded-md bg-accent/10 text-accent/80 border border-accent/20"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Empresa Atual Ltda.',
    period: '2023 – presente',
    description:
      'Desenvolvimento de aplicações SPA e SSR em Vue 3 + Nuxt. Liderança técnica do frontend, definição de padrões de código, code review e mentoria júnior.',
    techs: ['Vue 3', 'Nuxt', 'TypeScript', 'Tailwind', 'Pinia'],
  },
  {
    role: 'Frontend Developer Jr.',
    company: 'Agência Digital XYZ',
    period: '2022 – 2023',
    description:
      'Criação de landing pages e sistemas web para clientes de e-commerce. Foco em performance, SEO e integração com APIs REST.',
    techs: ['Vue 2', 'JavaScript', 'SASS', 'Webpack'],
  },
  {
    role: 'Freelancer',
    company: 'Projetos Próprios',
    period: '2021 – 2022',
    description:
      'Desenvolvimento de sites institucionais e e-commerces para clientes locais. Primeiros projetos com Vue.js e Nuxt.',
    techs: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
]
</script>