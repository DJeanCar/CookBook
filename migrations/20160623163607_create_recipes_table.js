
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('recipes', function (table) {
      table.increments();
      table.string("name");
      table.string("slug")
      table.string("chef");
      table.string("category")
      table.string("preparation");
      table.string("date");
      table.integer("stars").defaultTo(0)
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('recipes'),
  ]);
};
