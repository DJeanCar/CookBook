import { List, fromJS } from "immutable";
import { recipesFake } from "../fakeData/recipes";


const recipes = (state=List([]), action) => {

  switch (action.type) {

    case "ADD_RECIPE":
      return state.push(fromJS(action.payload))

    case "GET_ALL_RECIPES":
      return state.size === 0 ? state.concat(fromJS(recipesFake)) : state;

    case "SEARCH_RECIPE":
      const newRecipes = [];
      fromJS(recipesFake).map(recipe => {
        const name = recipe.get("name").toLowerCase();
        if (name.indexOf(action.payload.toLowerCase()) > -1) {
          newRecipes.push(recipe);
        }
      });
      return newRecipes;

    case "DELETE_RECIPE":
      let index;
      state.map((recipe, i) => {
        if (recipe.get("slug") === action.payload) {
            index = i;
          }
      });
      return state.splice(index,1);

    default:
      return state;

  }

};

export default recipes;