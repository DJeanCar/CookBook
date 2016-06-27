import { List, fromJS, Map } from "immutable";
import { recipesFake } from "../fakeData/recipes";
import { FETCH_RECIPES_REQUEST, FETCH_RECIPES_SUCCESS, ADD_RECIPES_SUCCESS, DELETE_RECIPES_SUCCESS, SEARCH_RECIPE } from "../actions";

const initialState = Map({
  isFetching: false,
  data: List([])
});

let recipesFromServer;

const recipes = (state=initialState, action) => {

  switch (action.type) {

    case FETCH_RECIPES_REQUEST:
      return Map({
        ...state,
        isFetching: true
      });

    case FETCH_RECIPES_SUCCESS:
      recipesFromServer = action.recipes;
      return Map({
        isFetching: false,
        data: fromJS(action.recipes)
      });

    case ADD_RECIPES_SUCCESS:
      recipesFromServer.push(action.payload)
      return Map({
        ...state,
        data: state.get("data").push(fromJS(action.payload))
      });

    case DELETE_RECIPES_SUCCESS:
      let index;
      state.get("data").map((recipe, i) => {
        if (recipe.get("slug") === action.slug) {
            index = i;
          }
      });
      recipesFromServer.splice(index, 1);
      return Map({
        ...state,
        data: state.get("data").splice(index,1)
      });

    case SEARCH_RECIPE:
      const newRecipes = [];
      recipesFromServer.map(recipe => {
        const name = Map(recipe).get("name").toLowerCase();
        if (name.indexOf(action.payload.toLowerCase()) > -1) {
          newRecipes.push(recipe);
        }
      });
      return Map({
        ...state,
        data: fromJS(newRecipes)
      });

    default:
      return state;

  }

};

export default recipes;