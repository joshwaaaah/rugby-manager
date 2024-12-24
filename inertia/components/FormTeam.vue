<script setup lang="ts">
import ClubDto from '#dtos/club_dto'

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { useForm } from 'vee-validate'
import { router } from '@inertiajs/vue3'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { watch, defineEmits } from 'vue'
import Input from '@/components/ui/input/Input.vue'

const props = defineProps<{
  errors: Record<string, string[]>
  club: ClubDto
}>()

const emit = defineEmits<{
  (event: 'form:success'): void
}>()

const formSchema = toTypedSchema(z.object({
  name: z.string().min(1).max(250),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  const valuesWithClubId = {
    ...values,
    clubId: props.club.id,
  }

  router.post('/teams', valuesWithClubId, {
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
    <FormField v-slot="{ componentField }" name="name" :validate-on-blur="false">
      <FormItem class="mb-4">
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input type="text" placeholder="A Team" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">
      Create your team
    </Button>
  </form>
</template>