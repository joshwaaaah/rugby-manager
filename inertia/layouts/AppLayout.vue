<script setup lang="ts">
import ToastManager from '@/components/ToastManager.vue'

defineProps<{
  messages: Record<string, string | Record<string, string>>
}>()
</script>

<template>
  <slot />

  <ToastManager :messages="messages" />
</template>
