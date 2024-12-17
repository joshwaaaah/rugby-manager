import User from '#models/user'

class UserDto {
  declare fullName: string
  declare email: string
  declare id: number

  constructor(private user: User) {}

  toJson() {
    return {
      id: this.user.id,
      fullName: this.user.fullName,
      email: this.user.email,
    }
  }
}

export default UserDto
