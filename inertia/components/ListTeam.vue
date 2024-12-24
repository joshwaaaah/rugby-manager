<script setup lang="ts">
import { ref } from 'vue'
import type { TeamDto } from '#types/team'
import type { ClubDto } from '#types/club'

import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import FormTeam from '@/components/FormTeam.vue'
import CardTeam from '@/components/CardTeam.vue'

const props = defineProps<{
  teams: TeamDto[],
  club: ClubDto,
  errors: Record<string, string[]>
}>()

const drawerOpen = ref(false)
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>
        <p>Manage your teams</p>
      </CardTitle>
    </CardHeader>
      <CardContent>
        <p v-if="!teams?.length">You don't have any teams yet.</p>
        <div v-else class="flex flex-col gap-4">
          <CardTeam v-for="team in teams" :key="team.id" :team="team" :club="club" />
        </div>
      </CardContent>
    <CardFooter>
      <Drawer :open="drawerOpen">
        <DrawerTrigger as-child>
          <Button @click="drawerOpen = true">
            Create your team
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div class="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Create your team</DrawerTitle>
              <DrawerDescription>A club is nothing without a team.</DrawerDescription>
            </DrawerHeader>

            <div class="p-4">
              <FormTeam v-bind="props" @form:success="drawerOpen = false" />
            </div>
            
            <DrawerFooter>
              <DrawerClose as-child>
                <Button @click="drawerOpen = false" variant="outline">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </CardFooter>
  </Card>
</template>