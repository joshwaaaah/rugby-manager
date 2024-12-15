<script setup lang="ts">
  import { Head } from '@inertiajs/vue3'

import Login from '@/components/ui-macro/login/Login.vue'
</script>

<template>
  <Head title="Homepage" />
  
  <main class="min-h-screen flex items-center justify-center">
    <Login />
  </main>
</template>
