<template>
  <div>
    <label class="text-xs text-gray-500 mb-1.5 block">{{ label }}</label>
    <slot />
  </div>
</template>
<script setup>
defineProps(['label'])
</script>