<template>
  <div class="flex flex-col gap-5 max-w-2xl">
    <AdminSection title="Grupos de skills">
      <div v-for="(group, gi) in skillGroups" :key="group.id || gi" class="border border-dark-600 rounded-lg p-3 bg-dark-800">
        <div class="flex items-center gap-2 mb-3">
          <input v-model="group.emoji" class="bg-transparent text-xl w-10 outline-none" />
          <input v-model="group.name" placeholder="Nome do grupo" class="flex-1 bg-transparent text-sm font-medium text-white outline-none" />
          <button class="text-red-400/60 hover:text-red-400 text-sm px-1" @click="emit('removeGroup', gi)">✕</button>
        </div>
        <div class="flex flex-col gap-2 pl-2">
          <div v-for="(skill, si) in group.skills" :key="skill.id || si" class="flex items-center gap-2">
            <input v-model="skill.name" placeholder="Nome da skill" class="flex-1 bg-dark-900 border border-dark-600 rounded px-2 py-1 text-xs text-white outline-none" />
            <input v-model.number="skill.level" type="number" min="0" max="100" class="w-14 bg-dark-900 border border-dark-600 rounded px-2 py-1 text-xs text-white outline-none text-center" />
            <span class="text-xs text-gray-600">%</span>
            <button class="text-red-400/60 hover:text-red-400 text-xs px-1" @click="group.skills.splice(si, 1)">✕</button>
          </div>
          <button class="text-xs text-gray-500 hover:text-accent text-left mt-1"
            @click="group.skills.push({ name: '', level: 80, group_id: group.id, order_index: group.skills.length })">
            + skill
          </button>
        </div>
      </div>
      <button class="mt-1 w-full py-2 border border-dashed border-dark-600 rounded-lg text-xs text-gray-500 hover:text-accent hover:border-accent/40 transition-all" @click="emit('addGroup')">
        + Adicionar grupo
      </button>
    </AdminSection>

    <AdminSection title="Também trabalho com (tags)">
      <div class="flex flex-wrap gap-2">
        <div v-for="(tag, ti) in skillTags" :key="tag.id || ti" class="flex items-center gap-1 bg-dark-800 border border-dark-600 rounded-full px-3 py-1">
          <input v-model="tag.name" class="bg-transparent text-xs text-white outline-none w-20" />
          <button class="text-red-400/60 hover:text-red-400 text-xs" @click="skillTags.splice(ti, 1)">✕</button>
        </div>
      </div>
      <button class="mt-2 text-xs text-gray-500 hover:text-accent"
        @click="skillTags.push({ name: 'Nova tag', order_index: skillTags.length })">
        + Adicionar tag
      </button>
    </AdminSection>
  </div>
</template>

<script setup lang="ts">
defineProps<{ skillGroups: any[]; skillTags: any[] }>()
const emit = defineEmits<{ addGroup: []; removeGroup: [i: number] }>()
</script>