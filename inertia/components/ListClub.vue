<script setup lang="ts">
import { ref } from 'vue'
import type { ClubDto } from '#types/club'

import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
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

import CardClub from '@/components/CardClub.vue'
import FormClub from '@/components/FormClub.vue'

const props = defineProps<{
  clubs: ClubDto[],
  errors: Record<string, string[]>
}>()

const drawerOpen = ref(false)
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>
        <p>Manage your clubs</p>
      </CardTitle>
      <CardDescription>
        You can join or create a club. Each club can contain multiple teams.
      </CardDescription>
    </CardHeader>
      <CardContent>
        <p v-if="!clubs?.length">You don't have any clubs yet.</p>
        <div v-else class="flex flex-col gap-4">
          <CardClub v-for="club in clubs" :key="club.id" :club="club" />
        </div>
      </CardContent>
    <CardFooter>
      <Drawer :open="drawerOpen">
        <DrawerTrigger as-child>
          <Button @click="drawerOpen = true">
            Create your club
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div class="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Create your club</DrawerTitle>
              <DrawerDescription>Start your journey with your club.</DrawerDescription>
            </DrawerHeader>

            <div class="p-4">
              <FormClub v-bind="props" @form:success="drawerOpen = false" />
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