import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
  })
)

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string().maxLength(255),
    email: vine.string().email().normalizeEmail().maxLength(255).unique({
      table: 'users',
      column: 'email',
    }),
    password: vine.string().minLength(8).maxLength(255),
  })
)
