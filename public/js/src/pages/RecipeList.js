import React from "react";

import Recipe from "../components/Recipe";

export default class RecipeList extends React.Component {
	render() {
		const recipes = this.props.recipes;
		return (
			<div class="container">
				{recipes.map(recipe => (
				<div class="row" key={recipe.get("id")}>
		            <div class="col s12">
		            		<Recipe recipe={recipe}/>
		            </div>
		        </div>
		      ))}
		    </div>
		)
	}
}