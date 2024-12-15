import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { loginValidator } from '#validators/auth'
import { Infer } from '@vinejs/vine/types'
import User from '#models/user'

type Params = {
  data: Infer<typeof loginValidator>
}

@inject()
export default class Login {
  constructor(protected ctx: HttpContext) {}

  async handle({ data }: Params) {
    const user = await User.verifyCredentials(data.email, data.password)

    await this.ctx.auth.use('web').login(user)

    return user
  }
}
