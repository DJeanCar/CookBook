import { deleteRecipe } from "../actions";
import RecipeDetail from "../pages/RecipeDetail";
import { connect } from "react-redux";
import RecipeCreate from "../pages/RecipeCreate";
import { addRecipe, addIngredient, setIngredientToOne } from "../actions";

const mapStateToProps = (state) => {
  return {
      ingredients: state.ingredients
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRecipe: recipe => dispatch(addRecipe(recipe)),
    addIngredient: () => dispatch(addIngredient()),
    setIngredientToOne: () => dispatch(setIngredientToOne())
  };
}

const RecipeCreateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeCreate)

export default RecipeCreateContainer;