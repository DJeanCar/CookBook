"use strict";
const express = require("express");
const router = express.Router();
const knex = require("../config/knex");

function gerOrCreateChef(name) {
  return knex
    .select("id")
    .from("chefs")
    .where(knex.raw('LOWER("name") = ?', name.toLowerCase()))
    .then(chef => {
      if (chef.length === 0) {
        // create Chef
        return knex("chefs")
          .insert({
            name: name
          })
          .returning('id')
          .then(id => {
            return id[0];
          })
      } else {
        return chef[0].id;
      }
    });
}

function getCategory(category) {
  return knex
    .select("id")
    .from("categories")
    .where({name: category})
    .then(category => {
      return category[0].id;
    });
}

function addRecipe(data) {
  return Promise.all([
    gerOrCreateChef(data.chef),
    getCategory(data.category)
  ])
  .then(results => {
    const chef_id = results[0];
    const category_id = results[1];
    return knex("recipes")
      .insert({
        name: data.name,
        slug: data.slug,
        preparation: data.preparation,
        category_id: category_id,
        chef_id: chef_id
      })
      .then(err => {
        return true;
      });
  });
}

router.route('/')

    .get( (req, res) => {
      knex
        .from("recipes")
        .then( recipes => {
          console.log(recipes);
        });
    	res.render('index');
    });

router.route('/recipes/add')

  .post( (req, res) => {
    addRecipe(req.body)
    .then(isSave => {
      console.log(isSave);
      return res.json({ isSave: isSave });
    });
  });

router.route('/recipes')

  .get( (req, res) => {
    knex
      .from("recipes")
      .then( recipes => {
        return res.json({ recipes: recipes })
      });
  });

module.exports = router;