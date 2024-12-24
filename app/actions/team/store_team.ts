import User from '#models/user'
import Team from '#models/team'

import { teamValidator } from '#validators/team'
import { Infer } from '@vinejs/vine/types'

type Params = {
  user: User
  data: Infer<typeof teamValidator>
}

export default class StoreTeam {
  static async handle({ data }: Params) {
    const team = await Team.create(data)

    return team
  }
}
