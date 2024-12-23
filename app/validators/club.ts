import vine from '@vinejs/vine'

export const clubValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(255),
    description: vine.string().maxLength(250).optional(),
    address: vine.string().maxLength(250).optional(),
  })
)
