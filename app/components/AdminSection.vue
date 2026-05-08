<template>
  <div class="bg-dark-900 border border-dark-700 rounded-xl p-5">
    <p class="text-[11px] font-mono text-accent tracking-widest uppercase mb-4">{{ title }}</p>
    <div class="flex flex-col gap-3"><slot /></div>
  </div>
</template>
<script setup>
defineProps(['title'])
</script>