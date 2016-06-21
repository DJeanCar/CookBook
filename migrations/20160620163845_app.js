
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable("chefs", table => {
      table.increments("id").primary();
      table.string("name");
    }),

    knex.schema.createTable("categories", table => {
      table.increments("id").primary();
      table.string("name");
    }),

    knex.schema.createTable("recipes", table => {
      table.increments("id").primary();
      table.string("name");
      table.string("slug");
      table.string("preparation");
      table.integer("stars").defaultTo(0);
      table.integer("category_id")
              .references("id")
              .inTable("categories");
      table.integer("chef_id")
              .references("id")
              .inTable("chefs");
      table.timestamps();
    }),

    knex.schema.createTable("ingredients", table => {
      table.increments("id").primary();
      table.string("name");
      table.string("amount");
      table.integer("recipe_id")
              .references("id")
              .inTable("recipes");
    })

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([

    knex.schema.dropTable("chefs"),
    knex.schema.dropTable("categories"),
    knex.schema.dropTable("recipes"),
    knex.schema.dropTable("ingredients")

  ]);
};
