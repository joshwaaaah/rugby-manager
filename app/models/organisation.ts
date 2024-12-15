import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Team from './team.js'
import User from './user.js'
export default class Organisation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Team)
  declare teams: HasMany<typeof Team>

  @manyToMany(() => User, {
    pivotTable: 'organisation_users',
    pivotColumns: ['role_id'],
  })
  declare users: ManyToMany<typeof User>
}
