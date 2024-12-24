import type { HttpContext } from '@adonisjs/core/http'

import { clubValidator } from '#validators/club'

import StoreClub from '#actions/club/store_club'
import DeleteClub from '#actions/club/delete_club'
import ClubPolicy from '#policies/club_policy'
import Club from '#models/club'

export default class ClubsController {
  public async show({ request, inertia }: HttpContext) {
    const club = await Club.findOrFail(request.param('id'))
    const teams = await club.related('teams').query()

    return inertia.render('Club', {
      club,
      teams,
    })
  }

  public async store({ request, auth, response }: HttpContext) {
    const data = await request.validateUsing(clubValidator)

    await StoreClub.handle({
      user: auth.user!,
      data,
    })

    return response.redirect('/dashboard')
  }

  public async destroy({ request, response, bouncer, session, auth }: HttpContext) {
    const club = await Club.findOrFail(request.param('id'))
    if (await bouncer.with(ClubPolicy).denies('delete', club)) {
      session.flash('errorsBag', {
        message: 'You are not authorized to delete this club',
      })

      return response.redirect().back()
    }

    await DeleteClub.handle({
      clubId: request.param('id'),
      user: auth.user!,
    })

    return response.redirect('/dashboard')
  }
}
