import Login from '#actions/auth/http/login'
import type { HttpContext } from '@adonisjs/core/http'
import { loginValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'

export default class LoginController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/Login')
  }

  @inject()
  async store({ request, response }: HttpContext, login: Login) {
    const data = await request.validateUsing(loginValidator)

    await login.handle({ data })

    return response.redirect('/dashboard')
  }
}
