import { List, Map, fromJS } from "immutable";
import _ from "lodash";
import { recipes } from "./fakeData/recipes";

// const init = List([]);

const initialState = {
  recipes: List([]),
  currentRecipe: Map({}),
  ranking: false,
  ingredients: 0
};

export default function (state=initialState, action) {

	switch(action.type) {

    case "ADD_RECIPE":
      return {
        ...state,
        recipes: state.recipes.push(fromJS(action.payload))
      }
    
    case "SEARCH_RECIPE":
      /* SEACH RECIPES */
      const newRecipes = [];
      fromJS(recipes).map(recipe => {
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
        const orderer_recipes = fromJS(_.orderBy(state.recipes.toJS(), ["stars"], ["desc"]));
        return {
          recipes: orderer_recipes,
          ranking: action.payload
        };
      } else {
        return {
          recipes: fromJS(recipes),
          ranking: action.payload
        };
      }

    case "GET_ALL_RECIPES":
      /* GET ALL RECIPES */
      const currentRecipes = state.recipes.size === 0 ? state.recipes.concat(fromJS(recipes)) : state.recipes;
      return {
        ...state,
        recipes: currentRecipes
      };

    case "GET_RECIPE":
      /* GET RECIPE OBJECT */
      let currentRecipe;
      state.recipes.map(recipe => {
        if (recipe.get("id") === action.payload) {
          currentRecipe = recipe;
        }
      });
      return {
        ...state,
        currentRecipe: currentRecipe
      };

    case "ADD_INGREDIENT":
      if (state.ingredients < 10) {
        return {
          ...state,
          ingredients: state.ingredients + 1
        };
      } else {
        return {
          ...state
        };
      }

    case "SET_INGREDIENT_TO_ONE":
      return {
        ...state,
        ingredients: 1
      };

    case "DELETE_RECIPE":
      let index;
      state.recipes.map((recipe, i) => {
        if (recipe.get("id") === action.payload) {
            index = i;
          }
      });
      return {
        ...state,
        recipes: state.recipes.splice(index,1)
      };

    default:
      return state;

  }

}