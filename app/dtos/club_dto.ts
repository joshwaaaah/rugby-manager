import Club from '#models/user'

class ClubDto {
  declare name: string
  declare id: number
  declare description: string
  declare address: string

  constructor(private club: Club) {}

  toJson() {
    return {
      id: this.club.id,
      name: this.club.name,
      description: this.club.description,
      address: this.club.address,
    }
  }
}

export default ClubDto
