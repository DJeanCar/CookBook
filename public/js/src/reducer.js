import { List, Map, fromJS } from "immutable";
import _ from "lodash";
import { recipes } from "./fakeData/recipes";

// const init = List([]);

const initialState = {
  recipes: List([]),
  ranking: false
};

export default function (state=initialState, action) {

	switch(action.type) {
    
    case "SEARCH_RECIPE":
      /* SEACH RECIPES */
      const newRecipes = [];
      recipes.map(recipe => {
        const name = recipe.get("name").toLowerCase();
        if (name.indexOf(action.payload.toLowerCase()) > -1) {
          newRecipes.push(recipe);
        }
      });
      return {
        ...state,
        recipes: List(newRecipes)
      };

    case "CHANGE_TO_RANKING":
      if (action.payload) {
        const orderer_recipes = fromJS(_.orderBy(recipes.toJS(), ["stars"], ["desc"]));
        return {
          recipes: orderer_recipes,
          ranking: action.payload
        };
      } else {
        return {
          recipes: recipes,
          ranking: action.payload
        };
      }

    case "GET_ALL_RECIPES":
      /* GET ALL RECIPES */
      return {
        ...state,
        recipes: recipes
      };

    default:
      return state;
  }

}