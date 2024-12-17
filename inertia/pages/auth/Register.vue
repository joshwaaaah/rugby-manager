<script lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'

export default {
  layout: AuthLayout
}
</script>

<script setup lang="ts">
import { watch } from 'vue'
import { Head, router } from '@inertiajs/vue3'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const props = defineProps<{
  errors?: Record<string, string[]>
  messages: Record<string, string | Record<string, string>>
}>()

const formSchema = toTypedSchema(z.object({
  fullName: z.string().min(2).max(250),
  email: z.string().email(),
  password: z.string().min(8).max(250),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  router.post('/register', values)
})

watch(() => props.errors, (errors) => {
  if (errors) {
    form.setErrors(errors)
  }
})
</script>

<template>
  <Head title="Register" />

  <form @submit.prevent="onSubmit" class="w-full max-w-sm">
    <Card>
      <CardHeader>
        <CardTitle class="text-xl">
          Sign Up
        </CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="">
            <div class="grid gap-2">
              <FormField v-slot="{ componentField }" name="fullName">
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Max Power" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
          </div>
          <div class="grid gap-2">
            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="info@email.com" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="grid gap-2">
            <FormField v-slot="{ componentField }" name="password">
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="dlhwd8277!" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>

          <Button type="submit" class="w-full">
            Create an account
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <a href="/login" class="underline">
            Sign in
          </a>
        </div>
      </CardContent>
    </Card>
  </form>
</template>
