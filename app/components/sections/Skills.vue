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

          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-200 bg-dark-700 border"
              :style="`border-color: ${category.color}40`"
            >
              {{ skill }}
            </span>
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
import { skillCategories, otherTechs } from '~/data/portfolio'
</script>