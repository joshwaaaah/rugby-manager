import User from '#models/user'

class UserDto {
  fullName: string
  email: string
  id: number

  constructor(user: User) {
    this.fullName = user.fullName
    this.email = user.email
    this.id = user.id
  }
}

export default UserDto
