import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { List, Map } from "immutable";

import Layout from "./pages/Layout";
import reducer from "./reducer";
import { LayoutContainer } from "./containers"

const store = createStore(reducer);

ReactDOM.render(
  /*<Router history={hashHistory}>
    <Route path="/" component={RecipeList}>
      <IndexRoute component={RecipeList}></IndexRoute>
    </Route>
  </Router>*/
  <Provider store={store}>
    <LayoutContainer />
  </Provider>,
  document.getElementById("app")
)


