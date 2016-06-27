import {observable, computed, autorun} from 'mobx';
import { recipesFake } from "../fakeData/recipes";
import fetch from 'isomorphic-fetch'
import request from "superagent";

export default class Recipe {

  @observable recipes = [];
  @observable ingredients = 1;

  constructor() {
    this.getRecipesFromServer();
  }

  async addRecipe(recipe) {
    let response = await request.post("/api/recipes/add").send(recipe);
    this.recipes.push(recipe);
  }

  addIngredient() {
    if (this.ingredients < 10) {
      this.ingredients += 1;
    }
  }

  getRecipe(slug) {
    let currentRecipe;
    this.recipes.map(recipe => {
      if (recipe.slug === slug) {
        currentRecipe = recipe;
      }
    });
    return currentRecipe;
  }

  async getRecipesFromServer(model) {
    let recipesfromDB = await request.get('/api/recipes');
    let newRecipes = recipesfromDB.body.recipes;
    this.recipes = Object.assign([], newRecipes);
  }

}