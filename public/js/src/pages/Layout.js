import React from "react";

import RecipeList from "./RecipeList";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default class Layout extends React.Component {	

	render() {
		const { recipes, searchRecipe, ranking } = this.props;
		return (
			<div>
				<Header />
				<section class="recipes">
					{this.props.children}
				</section>
				<Footer />
			</div>
		)
	}
}
