'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessageSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('public.gen_random_uuid()')).notNullable()
      table.uuid('group_id').references('id').inTable('groups').notNullable()
      table.uuid('sender').references('id').inTable('users').notNullable()
      table.uuid('receiver').references('id').inTable('users').notNullable()
      table.string('subject').defaultTo('Sin asunto').notNullable()
      table.text('body').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessageSchema
