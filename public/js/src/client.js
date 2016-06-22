import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { List, Map } from "immutable";

import Layout from "./pages/Layout";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeCreate from "./pages/RecipeCreate";

import reducer from "./reducers";

import RecipeListContainer from "./containers/RecipeListContainer";
import RecipeDetailContainer from "./containers/RecipeDetailContainer";
import RecipeCreateContainer from "./containers/RecipeCreateContainer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={RecipeListContainer}></IndexRoute>
        <Route path="recipes/:slug" component={RecipeDetailContainer}></Route>
        <Route path="newRecipe" component={RecipeCreateContainer}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);