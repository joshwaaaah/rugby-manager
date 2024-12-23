<script setup lang="ts">
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'vee-validate'
import { router } from '@inertiajs/vue3'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { watch, defineEmits } from 'vue'

const props = defineProps<{
  errors: Record<string, string[]>
}>()

const emit = defineEmits<{
  (event: 'form:success'): void
}>()

const formSchema = toTypedSchema(z.object({
  name: z.string().min(1).max(250),
  description: z.string().max(250).optional(),
  address: z.string().max(250).optional(),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  router.post('/clubs', values, {
    onSuccess: () => {
      emit('form:success')
    }
  })
})

watch(() => props.errors, (errors) => {
  if (errors) {
    form.setErrors(errors)
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem class="mb-4">
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Leeds Corinthians" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="description">
      <FormItem class="mb-4">
        <FormLabel>Description</FormLabel>
        <FormControl>
          <Input type="text" placeholder="A nice description" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="address">
      <FormItem class="mb-4">
        <FormLabel>Address</FormLabel>
        <FormControl>
          <Input type="text" placeholder="2 Leeds Road" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">
      Create your club
    </Button>
  </form>
</template>