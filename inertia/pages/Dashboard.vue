<script setup lang="ts">
import UserDto from '#dtos/user_dto'
import { Head } from '@inertiajs/vue3'

defineProps<{
  user: UserDto
}>()
</script>

<template>
  <Head title="Dashboard" />
  
  <main class="min-h-screen flex items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <p>Welcome, {{ user.fullName }}</p>
      <p>{{ user.email }}</p>
    </div>
  </main>
</template>
