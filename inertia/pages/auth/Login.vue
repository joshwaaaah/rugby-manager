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
  errors?: Record<string, string|string[]>,
}>()

const formSchema = toTypedSchema(z.object({
  email: z.string().email(),
  password: z.string().min(8)
})) 

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  router.post('/login', values)
})

watch(() => props.errors, (errors) => {
  if (errors) {
    form.setErrors(errors)
  }
})

</script>

<template>
  <Head title="Login" />

  <form @submit.prevent="onSubmit" class="w-full max-w-sm">
    <Card>
      <CardHeader>
        <CardTitle class="text-2xl">
          Login
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="info@example.com" v-bind="componentField" />
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
                  <Input type="password" placeholder="kdjwiD87899" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <Button type="submit" class="w-full">
            Login
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="/register" class="underline">
            Sign up
          </a>
          </div>
      </CardContent>
    </Card>
  </form>
</template>
