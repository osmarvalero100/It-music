'use strict'

const Schema = use('Schema')

class SetupDbSchema extends Schema {
  async up() {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "pgcrypto" schema public')
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp" schema public')
  }

  down() {
    this.table('setup_dbs', (table) => {
      this.db.raw('DROP EXTENSION IF EXISTS "pgcrypto" schema public')
      this.db.raw('DROP EXTENSION IF EXISTS "uuid-ossp" schema public')
    })
  }
}

module.exports = SetupDbSchema