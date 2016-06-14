import React from "react";

import Recipe from "../components/Recipe";

export default class RecipeList extends React.Component {
	
	render() {
		const { recipes, ranking } = this.props;
		return (
			<div class="container">
				{recipes.map((recipe, index) => (
				<div class="row" key={recipe.get("id")}>
		            <div class="col s12">
		            		<Recipe recipe={recipe} ranking={ranking} orden={index+1}/>
		            </div>
		        </div>
		      ))}
		    </div>
		)
	}
}