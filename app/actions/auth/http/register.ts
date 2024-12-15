import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { registerValidator } from '#validators/auth'
import { Infer } from '@vinejs/vine/types'
import User from '#models/user'

type Params = {
  data: Infer<typeof registerValidator>
}

@inject()
export default class Register {
  constructor(protected ctx: HttpContext) {}

  async handle({ data }: Params) {
    const user = await User.create(data)

    await this.ctx.auth.use('web').login(user)

    return { user }
  }
}
