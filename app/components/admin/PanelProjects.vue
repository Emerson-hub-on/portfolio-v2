<template>
  <div class="flex flex-col gap-5 max-w-2xl">
    <AdminSection title="Projetos">
      <div class="flex flex-col gap-3">
        <div
          v-for="(proj, i) in projects"
          :key="proj.id || i"
          class="bg-dark-800 border border-dark-700 rounded-lg p-4 flex flex-col gap-3"
        >
          <!-- Linha 1: emoji + nome + remover -->
          <div class="flex items-center gap-3">
            <span class="text-2xl cursor-pointer select-none" @click="emit('changeEmoji', i)">{{ proj.emoji }}</span>
            <input
              v-model="proj.name"
              placeholder="Nome do projeto"
              class="flex-1 bg-transparent text-sm text-white outline-none font-medium border-b border-dark-600 pb-1 focus:border-accent/60 transition-colors"
            />
            <button class="text-red-400/60 hover:text-red-400 text-sm px-1 shrink-0" @click="emit('remove', i)">✕</button>
          </div>

          <!-- Descrição -->
          <textarea
            v-model="proj.description"
            placeholder="Descrição do projeto"
            rows="2"
            class="w-full bg-dark-900 border border-dark-600 rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-accent/60 transition-colors resize-none"
          />

          <!-- Tags -->
          <input
            v-model="proj.tagsInput"
            placeholder="Tags separadas por vírgula (ex: Vue 3, Nuxt, TypeScript)"
            class="w-full bg-dark-900 border border-dark-600 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-accent/60 transition-colors"
          />

          <!-- URLs -->
          <div class="grid grid-cols-2 gap-2">
            <input
              v-model="proj.demo_url"
              placeholder="URL Demo"
              class="bg-dark-900 border border-dark-600 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-accent/60 transition-colors"
            />
            <input
              v-model="proj.github_url"
              placeholder="URL GitHub"
              class="bg-dark-900 border border-dark-600 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-accent/60 transition-colors"
            />
          </div>
        </div>
      </div>

      <button
        class="mt-2 w-full py-2 border border-dashed border-dark-600 rounded-lg text-xs text-gray-500 hover:text-accent hover:border-accent/40 transition-all"
        @click="emit('add')"
      >
        + Adicionar projeto
      </button>
    </AdminSection>
  </div>
</template>

<script setup lang="ts">
defineProps<{ projects: any[] }>()
const emit = defineEmits<{ add: []; remove: [i: number]; changeEmoji: [i: number] }>()
</script>