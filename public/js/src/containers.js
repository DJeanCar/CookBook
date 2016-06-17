import { connect } from "react-redux";

import Layout from "./pages/Layout";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeList from "./pages/RecipeList";
import RecipeCreate from "./pages/RecipeCreate";

import { searchRecipe, changeToRanking, getAllRecipes, getRecipe, addRecipe, addIngredient, setIngredientToOne } from "./actions";

export const LayoutContainer = connect(
	function mapStateToProps(state) {
		return state;
	},
)(Layout);

export const RecipeListContainer = connect(
  function mapStateToProps(state) {
    return state;
  },

  function mapDispatchToProps(dispatch) {
    return {
      getAllRecipes: () => dispatch(getAllRecipes()),
      searchRecipe: name => dispatch(searchRecipe(name)),
      changeToRanking: ranking => dispatch(changeToRanking(ranking))
    };
  }
)(RecipeList);

export const RecipeDetailContainer = connect(
  function mapStateToProps(state) {
    return state;
  },

  function mapDispatchToProps(dispatch) {
    return {
      getRecipe: slug => dispatch(getRecipe(slug))
    }
  }
)(RecipeDetail);

export const RecipeCreateContainer = connect(
  function mapStateToProps(state) {
    return state;
  },

  function mapDispatchToProps(dispatch) {
    return {
      addRecipe: recipe => dispatch(addRecipe(recipe)),
      addIngredient: () => dispatch(addIngredient()),
      setIngredientToOne: () => dispatch(setIngredientToOne())
    }
  }
)(RecipeCreate);