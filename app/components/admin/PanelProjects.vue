<template>
  <div class="flex flex-col gap-5 max-w-2xl">
    <AdminSection title="Projetos">
      <div class="flex flex-col gap-2">
        <div v-for="(proj, i) in projects" :key="proj.id || i"
          class="flex items-center gap-3 bg-dark-800 border border-dark-700 rounded-lg px-3 py-2.5">
          <span class="text-xl cursor-pointer" @click="emit('changeEmoji', i)">{{ proj.emoji }}</span>
          <div class="flex-1 min-w-0">
            <input v-model="proj.name" placeholder="Nome do projeto" class="bg-transparent text-sm text-white w-full outline-none font-medium" />
            <input v-model="proj.tagsInput" placeholder="tags separadas por vírgula" class="bg-transparent text-xs text-gray-500 w-full outline-none mt-0.5" />
          </div>
          <button class="text-red-400/60 hover:text-red-400 text-sm px-1" @click="emit('remove', i)">✕</button>
        </div>
      </div>
      <button class="mt-2 w-full py-2 border border-dashed border-dark-600 rounded-lg text-xs text-gray-500 hover:text-accent hover:border-accent/40 transition-all" @click="emit('add')">
        + Adicionar projeto
      </button>
    </AdminSection>
  </div>
</template>

<script setup lang="ts">
defineProps<{ projects: any[] }>()
const emit = defineEmits<{ add: []; remove: [i: number]; changeEmoji: [i: number] }>()
</script>