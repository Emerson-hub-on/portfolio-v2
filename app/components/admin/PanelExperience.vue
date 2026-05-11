<template>
  <div class="flex flex-col gap-5 max-w-2xl">
    <AdminSection title="Experiências">
      <div v-for="(exp, ei) in experiences" :key="exp.id || ei" class="bg-dark-800 border border-dark-700 rounded-lg p-4 flex flex-col gap-3">
        <div class="flex items-start gap-2">
          <div class="flex-1 flex flex-col gap-2">
            <div class="grid grid-cols-2 gap-2">
              <AdminField label="Cargo">
                <input v-model="exp.role" v-bind="inputClass" placeholder="Frontend Developer" />
              </AdminField>
              <AdminField label="Período">
                <input v-model="exp.period" v-bind="inputClass" placeholder="2023 - presente" />
              </AdminField>
            </div>
            <AdminField label="Empresa">
              <input v-model="exp.company" v-bind="inputClass" placeholder="Empresa Ltda." />
            </AdminField>
            <AdminField label="Descrição">
              <textarea v-model="exp.description" v-bind="inputClass" rows="2" class="resize-none" />
            </AdminField>
            <AdminField label="Tags (separadas por vírgula)">
              <input v-model="exp.tagsInput" v-bind="inputClass" placeholder="Vue 3, Nuxt, TypeScript" />
            </AdminField>
          </div>
          <button class="text-red-400/60 hover:text-red-400 text-sm px-1 mt-1" @click="emit('remove', ei)">✕</button>
        </div>
      </div>
      <button class="mt-1 w-full py-2 border border-dashed border-dark-600 rounded-lg text-xs text-gray-500 hover:text-accent hover:border-accent/40 transition-all" @click="emit('add')">
        + Adicionar experiência
      </button>
    </AdminSection>
  </div>
</template>

<script setup lang="ts">
defineProps<{ experiences: any[] }>()
const emit = defineEmits<{ add: []; remove: [i: number] }>()
const inputClass = { class: 'w-full bg-dark-800 border border-dark-600 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-accent/60 transition-colors font-body' }
</script>