import { connect } from "react-redux";
import Layout from "./pages/Layout";
import { searchRecipe, changeToRanking, getAllRecipes } from "./actions";

export const LayoutContainer = connect(
	function mapStateToProps(state) {
		return state;
	},

	function mapDispatchToProps(dispatch) {
		return {
			searchRecipe: name => dispatch(searchRecipe(name)),
      changeToRanking: ranking => dispatch(changeToRanking(ranking)),
      getAllRecipes: () => dispatch(getAllRecipes())
		};
	}
)(Layout);