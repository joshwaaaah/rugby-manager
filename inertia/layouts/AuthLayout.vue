<script setup lang="ts">
import ToastManager from '@/components/ToastManager.vue'

defineProps<{
  messages: Record<string, string | Record<string, string>>
}>()
</script>

<template>
  <main class="min-h-screen flex items-center justify-center">
    <slot />
  </main>

  <ToastManager :messages="messages" />
</template>
