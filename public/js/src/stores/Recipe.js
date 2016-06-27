import { observable } from 'mobx';
import { recipesFake } from "../fakeData/recipes";
import { rankingStore } from "./index";
import _ from "lodash";
import fetch from 'isomorphic-fetch'
import request from "superagent";

export default class Recipe {

  @observable recipes = [];
  @observable ingredients = 1;
  @observable ranking = false;
  recipesFromServer = [];

  constructor() {
    this.getRecipesFromServer();
  }

  async addRecipe(recipe) {
    let response = await request.post("/api/recipes/add").send(recipe);
    if (response.body.isSave) {
      this.recipes.push(recipe);
      this.recipesFromServer.push(recipe);
      this.ingredients = 1;
    }
  }

  async deleteRecipe(slug) {
    let response = await request.delete(`/api/recipes/delete/${slug}`);
    if (response.body.isDelete) {
      let index;
      this.recipes.map((recipe, i) => {
        if (recipe.slug === slug) {
            index = i;
          }
      });
      this.recipes.splice(index, 1);
      this.recipesFromServer.splice(index, 1);
    }
  }

  async getRecipesFromServer() {
    let recipesfromDB = await request.get('/api/recipes');
    let newRecipes = recipesfromDB.body.recipes;
    this.recipesFromServer = Object.assign([], newRecipes);
    this.sendRecipesToUI(rankingStore.ranking);
  }

  sendRecipesToUI(ranking) {
    if (!rankingStore.ranking) {
      this.recipes = Object.assign([], this.recipesFromServer);
    } else {
      this.recipes = _.orderBy(this.recipesFromServer, ["stars"], ["desc"])
    }
  }

  orderRecipes(newRecipes) {
    return _.orderBy(recipes, ["stars"], ["desc"]);
  }

  searchRecipe(name) {
    const newRecipes = [];
    this.recipesFromServer.map(recipe => {
      if (recipe.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
        newRecipes.push(recipe);
      }
    });
    this.recipes = Object.assign([], newRecipes);;
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


}