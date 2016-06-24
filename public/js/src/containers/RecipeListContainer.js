import { fromJS, Map } from "immutable";
import _ from "lodash";
import RecipeList from "../pages/RecipeList";
import { connect } from "react-redux";

import { searchRecipe, changeToRanking, fetchRecipes } from "../actions";

const getRecipes = (recipes, ranking) => {
  if (ranking) {
    return fromJS(_.orderBy(recipes.toJS(), ["stars"], ["desc"]));
  }    
  return recipes;
}

const mapStateToProps = (state) => {
  return {
    recipes: getRecipes(state.recipes.get("data"), state.ranking),
    ranking: state.ranking
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes()),
    searchRecipe: name => dispatch(searchRecipe(name)),
    changeToRanking: ranking => dispatch(changeToRanking(ranking))
  };
}

const RecipeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList)

export default RecipeListContainer;