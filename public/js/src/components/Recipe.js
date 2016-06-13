import React from "react";


export default class Recipe extends React.Component {
	render() {
		const recipe = this.props.recipe;
		return(
			<div class="recipe card">
        <div class="row valign-wrapper">
            <div class="col s6">
                <span class="recipe__name">{recipe.get("name")}</span>
                <span data-icon="&#xe9d7;" class="star star-list">{recipe.get("stars")}</span>
            </div>
            <div class="col s6 right-align valign">
                <span class="recipe__category chip">{recipe.get("category")}</span>
            </div>
        </div>
        <div class="row no-margin-bottom recipe__data">
            <div class="col s6">
                <span>Por {recipe.get("author")}</span>
            </div>
            <div class="col s6 right-align">
                <span class="recipe__publish_date">Publicado el {recipe.get("date")}</span>
            </div>
        </div>
    	</div>
		)
	}
}