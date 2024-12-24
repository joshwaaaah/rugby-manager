import { teamValidator } from '#validators/team'
import StoreTeam from '#actions/team/store_team'
import type { HttpContext } from '@adonisjs/core/http'

export default class TeamsController {
  public async store({ request, auth, response }: HttpContext) {
    const data = await request.validateUsing(teamValidator)

    await StoreTeam.handle({
      user: auth.user!,
      data,
    })

    return response.redirect().back()
  }
}
