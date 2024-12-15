import type { HttpContext } from '@adonisjs/core/http'
import { registerValidator } from '#validators/auth'
import Register from '#actions/auth/http/register'
import { inject } from '@adonisjs/core'

export default class RegisterController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/Register')
  }

  @inject()
  async store({ request, response }: HttpContext, register: Register) {
    const data = await request.validateUsing(registerValidator)

    await register.handle({ data })

    return response.redirect('/login')
  }
}
