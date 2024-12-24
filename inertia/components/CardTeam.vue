<script setup lang="ts">
import type { ClubDto } from '#types/club'
import type { TeamDto } from '#types/team'
import { Link } from '@inertiajs/vue3'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ShieldHalfIcon } from 'lucide-vue-next'

defineProps<{
  club: ClubDto
  team: TeamDto
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
    <Link :href="`/clubs/${club.id}/teams/${team.id}`" class="before:content-normal before:absolute before:inset-0">
      {{ team.name }}
    </Link>
    <p v-if="team.description" class="text-sm text-zinc-500">{{ team.description }}</p>
  </div>
</div>
</template>