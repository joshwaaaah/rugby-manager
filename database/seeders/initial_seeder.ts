import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Role from '#models/role'
import Roles from '#enums/roles'

export default class extends BaseSeeder {
  async run() {
    await Role.createMany([
      { id: Roles.ADMIN, name: 'Admin' },
      { id: Roles.MEMBER, name: 'Member' },
    ])
  }
}
