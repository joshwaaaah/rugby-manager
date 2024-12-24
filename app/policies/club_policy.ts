import User from '#models/user'
import Club from '#models/club'
import { BasePolicy } from '@adonisjs/bouncer'

export default class ClubPolicy extends BasePolicy {
  async delete(user: User, club: Club) {
    return user.id === club.createdBy
  }
}
