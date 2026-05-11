<template>
  <div class="flex flex-col gap-5 max-w-2xl">
    <AdminSection title="Tela de introdução">
      <AdminField label="Título (ex: Dev Frontend)">
        <input v-model="about.intro_title" v-bind="inputClass" placeholder="Dev Frontend" />
      </AdminField>
      <AdminField label="Subtítulo (ex: Vue · Nuxt · React)">
        <input v-model="about.intro_subtitle" v-bind="inputClass" placeholder="Vue · Nuxt · React" />
      </AdminField>
      <p class="text-xs text-gray-600">A foto da introdução é a mesma da seção Sobre mim.</p>
    </AdminSection>

    <AdminSection title="Textos principais">
      <AdminField label="Tag de boas-vindas">
        <input v-model="hero.welcome_tag" v-bind="inputClass" />
      </AdminField>
      <AdminField label="Título destaque">
        <input v-model="hero.title_highlight" v-bind="inputClass" />
      </AdminField>
      <AdminField label="Complemento do título">
        <input v-model="hero.title_complement" v-bind="inputClass" />
      </AdminField>
      <AdminField label="Descrição">
        <textarea v-model="hero.description" v-bind="inputClass" rows="3" class="resize-none" />
      </AdminField>
    </AdminSection>

    <AdminSection title="Botões de ação">
      <div class="grid grid-cols-2 gap-3">
        <AdminField label="Botão primário">
          <input v-model="hero.btn_primary" v-bind="inputClass" />
        </AdminField>
        <AdminField label="Botão secundário">
          <input v-model="hero.btn_secondary" v-bind="inputClass" />
        </AdminField>
      </div>
    </AdminSection>

    <AdminSection title="Estatísticas">
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-dark-800 rounded-lg p-3 flex items-center gap-3 border border-dark-600">
          <input v-model="hero.stat_experience" class="bg-transparent text-accent font-bold text-xl w-14 outline-none" />
          <span class="text-xs text-gray-500 font-mono">anos de experiência</span>
        </div>
        <div class="bg-dark-800 rounded-lg p-3 flex items-center gap-3 border border-dark-600">
          <input v-model="hero.stat_projects" class="bg-transparent text-accent font-bold text-xl w-14 outline-none" />
          <span class="text-xs text-gray-500 font-mono">projetos entregues</span>
        </div>
      </div>
    </AdminSection>
  </div>
</template>

<script setup lang="ts">
defineProps<{ hero: Record<string, any>; about: Record<string, any> }>()
const inputClass = { class: 'w-full bg-dark-800 border border-dark-600 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-accent/60 transition-colors font-body' }
</script>