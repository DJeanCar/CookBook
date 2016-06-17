import { observable } from "mobx";

export default class RecipeStore {
  @observable recipes = [];

  addNewRecipe(recipe) {
    // save the recipe
    console.log(recipe);
    this.recipe.push(recipe);
  }
}