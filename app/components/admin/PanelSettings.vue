<template>
  <div class="flex flex-col gap-5 max-w-md">
    <AdminSection title="Alterar senha">
      <AdminField label="Nova senha">
        <input v-model="newPassword" type="password" placeholder="••••••••" v-bind="inputClass" />
      </AdminField>
      <AdminField label="Confirmar nova senha">
        <input v-model="confirmPassword" type="password" placeholder="••••••••" v-bind="inputClass" />
      </AdminField>
      <button class="mt-1 px-4 py-2 text-sm rounded-lg font-medium text-white transition-opacity hover:opacity-80"
        style="background: linear-gradient(135deg, #7c6aff, #5a4bcc);"
        @click="emit('changePassword', newPassword, confirmPassword)">
        Atualizar senha
      </button>
      <p v-if="pwMsg" class="text-xs mt-2" :class="pwMsg.ok ? 'text-green-400' : 'text-red-400'">
        {{ pwMsg.text }}
      </p>
    </AdminSection>
  </div>
</template>

<script setup lang="ts">
defineProps<{ pwMsg: { ok: boolean; text: string } | null }>()
const emit = defineEmits<{ changePassword: [newPw: string, confirmPw: string] }>()
const newPassword = ref('')
const confirmPassword = ref('')
const inputClass = { class: 'w-full bg-dark-800 border border-dark-600 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-accent/60 transition-colors font-body' }
</script>