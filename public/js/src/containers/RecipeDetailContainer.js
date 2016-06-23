import { deleteRecipe } from "../actions";
import RecipeDetail from "../pages/RecipeDetail";
import { connect } from "react-redux";


const recipeDetail = (recipes, slug) => {
  let currentRecipe;
  recipes.get("data").map(recipe => {
    if (recipe.get("slug") === slug) {
      currentRecipe = recipe;
    }
  });
  return currentRecipe;
}

const mapStateToProps = (state, ownProps) => {
  return {
      currentRecipe: recipeDetail(state.recipes, ownProps.params.slug)
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRecipe: slug => dispatch(deleteRecipe(slug))
  };
}

const RecipeDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetail)

export default RecipeDetailContainer;