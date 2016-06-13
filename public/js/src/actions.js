

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