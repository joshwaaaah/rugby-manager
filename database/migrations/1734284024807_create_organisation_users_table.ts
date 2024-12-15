import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'organisation_users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('organisation_id')
        .references('id')
        .inTable('organisations')
        .onDelete('CASCADE')
        .notNullable()
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable()
      table.integer('role_id').references('id').inTable('roles')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
