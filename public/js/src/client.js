import React from "react";
import { createStore, applyMiddleware } from "redux";

import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

import Layout from "./pages/Layout";
import reducer from "./reducers";

/* CONTAINERS */
import RecipeListContainer from "./containers/RecipeListContainer";
import RecipeDetailContainer from "./containers/RecipeDetailContainer";
import RecipeCreateContainer from "./containers/RecipeCreateContainer";

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

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