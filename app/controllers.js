"use strict";
const express = require("express");
const router = express.Router();
const Recipe = require("./models").Recipe;

router.route('/')

    .get( (req, res) => {
    	res.render('index');
    });

router.route('/api/recipes/add')

  .post( (req, res) => {
    Recipe
      .forge({
        name: req.body.name,
        slug: req.body.slug,
        chef: req.body.chef,
        category: req.body.category,
        preparation: req.body.preparation,
        date: req.body.date
      })
      .save()
      .then(recipe => {
        return res.json({isSave: true})
      });
  });

router.route('/api/recipes')

  .get( (req, res) => {
    new Recipe()
      .fetchAll()
      .then(data => {
        return res.json({ recipes: data })
      })
  });

router.route('/api/recipes/delete/:recipe_slug')

  .delete((req, res) => {
    Recipe
      .forge({slug: req.params.recipe_slug})
      .fetch()
      .then(recipe => {
        recipe
          .destroy()
          .then(() => {
            res.json({isDelete: true})
          });
      });
  });

module.exports = router;