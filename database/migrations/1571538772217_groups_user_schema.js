'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupsUserSchema extends Schema {
  up () {
    this.create('groups_users', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('public.gen_random_uuid()')).notNullable
      table.uuid('group_id').references('id').inTable('groups')
      table.uuid('user_id').references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('groups_users')
  }
}

module.exports = GroupsUserSchema
