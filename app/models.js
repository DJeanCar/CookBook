"use strict";
const bookshelf = require("../config/knex");

const Recipe = bookshelf.Model.extend({
  tableName: "recipes"
});


module.exports = {
  Recipe: Recipe
};