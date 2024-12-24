<script setup lang="ts">
import type { ClubDto } from '#types/club'
import { router, Link } from '@inertiajs/vue3'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ShieldHalfIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

defineProps<{
  club: ClubDto
}>()
</script>

<template>  
<div class="relative border rounded p-4 flex items-center gap-4">
  <div class="hidden md:block">
    <Avatar>
      <AvatarFallback>
        <ShieldHalfIcon class="w-5 h-5" />
      </AvatarFallback>
    </Avatar>
  </div>
  <div>
    <Link :href="`/clubs/${club.id}`" class="before:content-normal before:absolute before:inset-0">
      {{ club.name }}
    </Link>
    <p v-if="club.description" class="text-sm text-zinc-500">{{ club.description }}</p>
  </div>
  <div class="ml-auto">
  <Button variant="outline" class="relative z-10" @click="router.delete(`/clubs/${club.id}`)">
    Delete
  </Button>
  </div>
</div>
</template>