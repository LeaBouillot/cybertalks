import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary() //considerer comme clé primaire
      table.string('title', 80).notNullable()
      table.text('description')
      table.dateTime('date')
      table.boolean('is_online')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
//pour BDD ecrit snake cases
//up() pour créer:  is called when the schema changes from different versions of the database system to the current version of the database system and updates the schema accordingly
// down() pour effacer: is called when the schema changes and the table is removed