import React from "react";
import { observer } from "mobx-react";

@observer
export default class Recipe extends React.Component {

  isRanking(ranking, orden) {
    if (ranking) {
      return <div class="position center-align">{orden}</div>;
    }
  }

	render() {
    // const { recipe, ranking, orden } = this.props;
    const { recipe, orden } = this.props;
		return(
			<div class="recipe card">
        {this.isRanking(false, orden)}
        <div class="row valign-wrapper">
            <div class="col s6">
                <span class="recipe__name">{recipe.name}</span>
                <span data-icon="&#xe9d7;" class="star star-list">{recipe.stars}</span>
            </div>
            <div class="col s6 right-align valign">
                <span class="recipe__category chip">{recipe.category}</span>
            </div>
        </div>
        <div class="row no-margin-bottom recipe__data">
            <div class="col s6">
                <span>Por {recipe.chef}</span>
            </div>
            <div class="col s6 right-align">
                <span class="recipe__publish_date">Publicado el {recipe.date}</span>
            </div>
        </div>
      </div>
		)
	}
}