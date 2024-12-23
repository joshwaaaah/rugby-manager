import type { HttpContext } from '@adonisjs/core/http'

import { clubValidator } from '#validators/club'
import StoreClub from '#actions/club/store_club'
import DeleteClub from '#actions/club/delete_club'

export default class ClubsController {
  public async store({ request, auth, response }: HttpContext) {
    const data = await request.validateUsing(clubValidator)

    await StoreClub.handle({
      user: auth.user!,
      data,
    })

    return response.redirect('/dashboard')
  }

  public async destroy({ request, response, auth }: HttpContext) {
    await DeleteClub.handle({
      clubId: request.param('id'),
      user: auth.user!,
    })

    return response.redirect('/dashboard')
  }
}
