import { connect } from "react-redux";
import Layout from "./pages/Layout";
import { searchRecipe } from "./actions";

export const LayoutContainer = connect(
	function mapStateToProps(state) {
		return { recipes: state };
	},

	function mapDispatchToProps(dispatch) {
		return {
			searchRecipe: name => dispatch(searchRecipe(name))
		};
	}
)(Layout);