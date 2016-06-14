

const uid = () => Math.random().toString(34).slice(2);

export function addRecipe(recipe) {
	// ..
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