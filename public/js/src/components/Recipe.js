import React from "react";


export default class Recipe extends React.Component {

  isRanking(ranking, orden) {
    if (ranking) {
      return <div class="position center-align">{orden}</div>;
    }
  }

	render() {
        const { recipe, ranking, orden } = this.props;
		return(
			<div class="recipe card">
        {this.isRanking(ranking, orden)}
        <div class="row valign-wrapper">
            <div class="col s6">
                <span class="recipe__name">{recipe.get("name")}</span>
                <span data-icon="&#xe9d7;" class="star star-list">{recipe.get("stars")}</span>
            </div>
            <div class="col s6 right-align valign">
                <span class="recipe__category regular chip">{recipe.get("category")}</span>
            </div>
        </div>
        <div class="row no-margin-bottom recipe__data">
            <div class="col s6">
                <span>By {recipe.get("chef")}</span>
            </div>
            <div class="col s6 right-align">
                <span class="recipe__publish_date regular">{recipe.get("date")}</span>
            </div>
        </div>
      </div>
		)
	}
}