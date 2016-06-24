import React from "react";

import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeCreate from "./pages/RecipeCreate";


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={RecipeList}></IndexRoute>
      <Route path="recipes/:slug" component={RecipeDetail}></Route>
      <Route path="newRecipe" component={RecipeCreate}></Route>
    </Route>
  </Router>,
  document.getElementById("app")
);