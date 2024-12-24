import User from '#models/user'
import Club from '#models/club'

import { clubValidator } from '#validators/club'
import { Infer } from '@vinejs/vine/types'

type Params = {
  user: User
  data: Infer<typeof clubValidator>
}

export default class StoreClub {
  static async handle({ user, data }: Params) {
    const club = await Club.create({ ...data, createdBy: user.id })

    await this.assignUserToClub(user, club)

    return club
  }

  private static async assignUserToClub(user: User, club: Club) {
    return user.related('clubs').attach([club.id])
  }
}
