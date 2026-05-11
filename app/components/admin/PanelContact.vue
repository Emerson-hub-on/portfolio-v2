<template>
  <div class="flex flex-col gap-5 max-w-2xl">
    <AdminSection title="Email e redes sociais">
      <AdminField label="Email de contato">
        <input v-model="contact.email" v-bind="inputClass" placeholder="seuemail@exemplo.com" />
      </AdminField>
      <AdminField label="GitHub URL">
        <input v-model="contact.github_url" v-bind="inputClass" placeholder="https://github.com/seu-user" />
      </AdminField>
      <AdminField label="LinkedIn URL">
        <input v-model="contact.linkedin_url" v-bind="inputClass" placeholder="https://linkedin.com/in/seu-user" />
      </AdminField>
      <AdminField label="Twitter / X URL">
        <input v-model="contact.twitter_url" v-bind="inputClass" placeholder="https://x.com/seu-user" />
      </AdminField>
    </AdminSection>
  </div>
</template>

<script setup lang="ts">
defineProps<{ contact: Record<string, any> }>()
const inputClass = { class: 'w-full bg-dark-800 border border-dark-600 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-accent/60 transition-colors font-body' }
</script>