import Club from '#models/club'
import User from '#models/user'

type Params = {
  clubId: string
  user: User
}

export default class DeleteClub {
  static async handle({ clubId, user }: Params) {
    const userClubs = user.related('clubs').query()
    const clubToDelete = userClubs.where('id', clubId)

    if (!clubToDelete) {
      throw new Error('Cannot delete club')
    }

    await clubToDelete.delete()
  }
}
