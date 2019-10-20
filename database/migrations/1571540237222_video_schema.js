'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VideoSchema extends Schema {
  up () {
    this.create('videos', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('public.gen_random_uuid()')).notNullable()
      table.uuid('group_id').references('id').inTable('groups').notNullable()
      table.string('youtube_id', 20).notNullable()
      table.string('title', 150).notNullable()
      table.json('image')
      table.integer('duration').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('videos')
  }
}

module.exports = VideoSchema
