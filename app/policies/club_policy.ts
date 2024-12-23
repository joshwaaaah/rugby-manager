import User from '#models/user'
import Club from '#models/club'
import { BasePolicy } from '@adonisjs/bouncer'

export default class ClubPolicy extends BasePolicy {
  async delete(user: User, club: Club) {
    const associatedClubUser = await club.related('users').query().where('user_id', user.id).first()

    if (associatedClubUser) {
      return true
    }

    return false
  }
}
