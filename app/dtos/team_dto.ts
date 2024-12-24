import Team from '#models/team'

class TeamDto {
  declare name: string
  declare id: number

  constructor(private team: Team) {}

  toJson() {
    return {
      id: this.team.id,
      name: this.team.name,
    }
  }
}

export default TeamDto
