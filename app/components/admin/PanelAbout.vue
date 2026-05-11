<template>
  <div class="flex flex-col gap-5 max-w-2xl">
    <AdminSection title="Foto de perfil">

      <div class="flex items-center gap-4">
        <div class="w-16 h-16 rounded-xl bg-dark-800 border border-dashed border-dark-600 flex items-center justify-center overflow-hidden">
          <img v-if="about.photo_url" :src="about.photo_url" class="w-full h-full object-cover" />
          <span v-else class="text-2xl">👤</span>
        </div>
        <div>
          <input type="file" ref="fileInput" accept="image/*" class="hidden" @change="emit('upload', $event)" />
          <button class="px-3 py-1.5 text-xs border border-accent/40 text-accent rounded-lg hover:bg-accent/10 transition-all" @click="(fileInput as HTMLInputElement)?.click()">
            {{ uploading ? 'Enviando...' : '↑ Escolher foto' }}
          </button>
          <p class="text-xs text-gray-600 mt-1.5">JPG, PNG ou WebP</p>
        </div>
      </div>

      <AdminField label="Formato da foto">
        <div class="flex gap-3 mt-1">
            <button
            class="flex-1 py-2 rounded-lg text-xs font-medium border transition-all"
            :class="about.photo_shape !== 'round'
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-dark-600 text-gray-500 hover:border-dark-500'"
            @click="about.photo_shape = 'square'"
            >
            ⬜ Quadrada
            </button>
            <button
            class="flex-1 py-2 rounded-lg text-xs font-medium border transition-all"
            :class="about.photo_shape === 'round'
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-dark-600 text-gray-500 hover:border-dark-500'"
            @click="about.photo_shape = 'round'"
            >
            ⭕ Redonda
            </button>
        </div>
        </AdminField>
    </AdminSection>

    <AdminSection title="Textos">
      <div class="grid grid-cols-2 gap-3">
        <AdminField label="Título linha 1">
          <input v-model="about.title_line1" v-bind="inputClass" />
        </AdminField>
        <AdminField label="Título linha 2 (destaque)">
          <input v-model="about.title_line2" v-bind="inputClass" />
        </AdminField>
      </div>
      <AdminField label="Parágrafo 1">
        <textarea v-model="about.paragraph1" v-bind="inputClass" rows="3" class="resize-none" />
      </AdminField>
      <AdminField label="Parágrafo 2">
        <textarea v-model="about.paragraph2" v-bind="inputClass" rows="3" class="resize-none" />
      </AdminField>
    </AdminSection>

    <AdminSection title="Números">
      <div class="grid grid-cols-2 gap-3">
        <div v-for="stat in stats" :key="stat.key" class="bg-dark-800 border border-dark-600 rounded-lg p-3 flex items-center gap-3">
          <input v-model="about[stat.key]" class="bg-transparent text-accent font-bold text-lg w-12 outline-none" />
          <span class="text-xs text-gray-500 font-mono">{{ stat.label }}</span>
        </div>
      </div>
    </AdminSection>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ about: Record<string, any>; uploading: boolean }>()
const emit = defineEmits<{ upload: [event: Event] }>()
const fileInput = ref<HTMLInputElement | null>(null)
const inputClass = { class: 'w-full bg-dark-800 border border-dark-600 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-accent/60 transition-colors font-body' }
const stats = [
  { key: 'stat_experience', label: 'anos de experiência' },
  { key: 'stat_projects',   label: 'projetos entregues' },
  { key: 'stat_clients',    label: 'clientes satisfeitos' },
  { key: 'stat_coffee',     label: 'café consumido' },
]
</script>