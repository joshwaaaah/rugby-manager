import vine from '@vinejs/vine'

export const teamValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(255),
    clubId: vine.number(),
  })
)
