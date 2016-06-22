import { combineReducers } from "redux";

import recipes from "./recipes";
import ranking from "./ranking";
import ingredients from "./ingredients";

const recipesApp = combineReducers({
  recipes,
  ranking,
  ingredients
});

export default recipesApp;
