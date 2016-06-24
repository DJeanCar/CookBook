import {observable, computed, autorun} from 'mobx';
import { recipesFake } from "../fakeData/recipes";
import fetch from 'isomorphic-fetch'
import request from "superagent";

export default class Recipe {

  @observable recipes = [];

  constructor() {
    // this.recipes = recipesFake;
    this.getRecipesFromServer();
  }

  async getRecipesFromServer(model) {
    let recipesfromDB = await request.get('/api/recipes');
    let newRecipes = recipesfromDB.body.recipes;
    this.recipes = Object.assign([], newRecipes);
  }

}