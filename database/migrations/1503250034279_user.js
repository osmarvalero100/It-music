'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('public.gen_random_uuid()')).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.boolean('active').defaultTo(false)
      table.string('dj_name', 100).notNullable()
      table.string('gender', 8)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
