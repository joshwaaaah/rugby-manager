
<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

import UserDto from '#dtos/user_dto'
import ClubDto from '#dtos/club_dto'
import TeamDto from '#dtos/team_dto'

import AuthLayout from '@/layouts/AuthLayout.vue'
import HeaderAuth from '@/components/HeaderAuth.vue'
import ListTeam from '@/components/ListTeam.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

defineOptions({
  layout: AuthLayout
})

const props = defineProps<{
  user: UserDto
  club: ClubDto,
  teams: TeamDto[],
  errors: Record<string, string[]>
}>()
</script>

<template>
  <Head :title="club.name" />

  <HeaderAuth />

  <main class="p-4 [ md:p-8 ]">
    <div class="grid grid-cols-12 gap-4">
      <div class="grid gap-4 col-span-full lg:col-span-4">
        <Card>
          <CardHeader>
            <CardTitle>{{ club.name }}</CardTitle>
            <CardDescription>{{ club.description }}</CardDescription>
          </CardHeader>
          <CardContent v-if="club.address">
            <p>{{ club.address }}</p>
          </CardContent>
        </Card>

        <ListTeam v-bind="props" />
      </div>
    </div>
  </main>
</template>
