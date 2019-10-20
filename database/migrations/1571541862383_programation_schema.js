'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProgramationSchema extends Schema {
  up () {
    this.create('programations', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('public.gen_random_uuid()')).notNullable()
      table.uuid('group_id').references('id').inTable('groups').notNullable()
      table.uuid('user_id').references('id').inTable('users').notNullable()
      table.uuid('video_id').references('id').inTable('videos').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('programations')
  }
}

module.exports = ProgramationSchema
