
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('recipes', function(table){
      table.json('ingredients');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('recipes', function(table){
      table.dropColumn('ingredients');
    })
  ])
};
