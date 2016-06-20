
export function addRecipe(recipe) {
	return {
    type: "ADD_RECIPE",
    payload: recipe
  }
}

export function setIngredientToOne() {
  return {
    type: "SET_INGREDIENT_TO_ONE"
  }
}

export function searchRecipe(name) {
	return {
		type: "SEARCH_RECIPE",
		payload: name
	}
}

export function changeToRanking(ranking) {
	return {
		type: "CHANGE_TO_RANKING",
		payload: ranking
	}
}

export function getAllRecipes() {
  return {
    type: "GET_ALL_RECIPES"
  }
}

export function getRecipe(slug) {
  return {
    type: "GET_RECIPE",
    payload: slug
  }
}

export function addIngredient() {
  return {
    type: "ADD_INGREDIENT"
  }
}

export function deleteRecipe(slug) {
  return {
    type: "DELETE_RECIPE",
    payload: slug
  }
}