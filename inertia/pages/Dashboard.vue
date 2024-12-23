
<script setup lang="ts">
import UserDto from '#dtos/user_dto'
import ClubDto from '#dtos/club_dto'
import { Head } from '@inertiajs/vue3'

import AuthLayout from '@/layouts/AuthLayout.vue'
import HeaderAuth from '@/components/HeaderAuth.vue'
import ListClub from '@/components/ListClub.vue'

defineOptions({
  layout: AuthLayout
})

const props = defineProps<{
  user: UserDto
  clubs?: ClubDto[],
  errors: Record<string, string[]>
}>()
</script>

<template>
  <Head title="Dashboard" />

  <HeaderAuth />

  <main class="p-4 [ md:p-8 ]">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-full lg:col-span-4">
        <ListClub v-bind="props" />
      </div>
    </div>
  </main>
</template>
