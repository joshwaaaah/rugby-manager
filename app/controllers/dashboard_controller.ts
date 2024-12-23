import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  public async show(ctx: HttpContext) {
    const { inertia, auth } = ctx

    const user = await auth.user!!

    const userClubs = await user.related('clubs').query().preload('users')
    return inertia.render('Dashboard', {
      clubs: userClubs,
    })
  }
}
