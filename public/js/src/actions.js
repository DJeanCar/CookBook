export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const SET_INGREDIENT_TO_ONE = "SET_INGREDIENT_TO_ONE";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const CHANGE_TO_RANKING = "CHANGE_TO_RANKING";
export const GET_RECIPE = "GET_RECIPE";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_RECIPE = "DELETE_RECIPE";

export function addRecipe(recipe) {
	return {
    type: ADD_RECIPE,
    payload: recipe
  }
}

export function setIngredientToOne() {
  return {
    type: SET_INGREDIENT_TO_ONE
  }
}

export function searchRecipe(name) {
	return {
		type: SEARCH_RECIPE,
		payload: name
	}
}

export function changeToRanking(ranking) {
	return {
		type: CHANGE_TO_RANKING,
		payload: ranking
	}
}

export function getAllRecipes() {
  return {
    type: GET_ALL_RECIPES
  }
}

export function getRecipe(slug) {
  return {
    type: GET_RECIPE,
    payload: slug
  }
}

export function addIngredient() {
  return {
    type: ADD_INGREDIENT
  }
}

export function deleteRecipe(slug) {
  return {
    type: DELETE_RECIPE,
    payload: slug
  }
}