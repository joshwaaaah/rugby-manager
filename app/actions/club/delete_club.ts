import Club from '#models/club'
import User from '#models/user'

type Params = {
  clubId: string
  user: User
}

export default class DeleteClub {
  static async handle({ clubId, user }: Params) {
    const clubToDelete = await Club.find(clubId)

    if (!clubToDelete) {
      throw new Error('Club not found')
    }

    await clubToDelete.delete()
  }
}
