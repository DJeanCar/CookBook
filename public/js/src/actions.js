export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const SET_INGREDIENT_TO_ONE = "SET_INGREDIENT_TO_ONE";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const CHANGE_TO_RANKING = "CHANGE_TO_RANKING";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_RECIPE = "DELETE_RECIPE";

export const FETCH_RECIPES_REQUEST = "FETCH_RECIPES_REQUEST";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";

export const ADD_RECIPES_SUCCESS = "ADD_RECIPES_SUCCESS";

export const DELETE_RECIPES_SUCCESS = "DELETE_RECIPES_SUCCESS";

import fetch from 'isomorphic-fetch'
import request from "superagent";


export function addRecipeSuccess(recipe) {
  return {
    type: ADD_RECIPES_SUCCESS,
    payload: recipe
  }
}

export function deleteRecipeSuccess(slug){
  return {
    type: DELETE_RECIPES_SUCCESS,
    slug
  }
}

export function requestRecipes() {
  return {
    type: FETCH_RECIPES_REQUEST
  };
}

export function successRecipes(json) {
  return {
    type: FETCH_RECIPES_SUCCESS,
    recipes: json.recipes
  };
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

export function fetchRecipes() {
  return async function (dispatch) {
    dispatch(requestRecipes());
    let response = await fetch("/api/recipes")
    let json = await response.json();
    dispatch(successRecipes(json));
  }
}

export function addRecipe(data) {
  return async function (dispatch) {
    let response = await request.post("/api/recipes/add").send(data);
    if (response.body.isSave) {
      dispatch(addRecipeSuccess(data));
    }
  };
}

export function addIngredient() {
  return {
    type: ADD_INGREDIENT
  }
}

export function deleteRecipe(slug) {
  return async function(dispatch) {
    let response = await request.delete(`/api/recipes/delete/${slug}`);
    if (response.body.isDelete) {
      dispatch(deleteRecipeSuccess(slug));
    }
  };
}