import React from "react";


export default class Recipe extends React.Component {

  isRanking(ranking, orden) {
    if (ranking) {
      return <div class="position center-align">{orden}</div>;
    }
  }

	render() {
        // const { recipe, ranking, orden } = this.props;
		return(
			<div class="recipe card">
        {this.isRanking(false, 1)}
        <div class="row valign-wrapper">
            <div class="col s6">
                <span class="recipe__name">Ceviche</span>
                <span data-icon="&#xe9d7;" class="star star-list">4</span>
            </div>
            <div class="col s6 right-align valign">
                <span class="recipe__category chip">Salads</span>
            </div>
        </div>
        <div class="row no-margin-bottom recipe__data">
            <div class="col s6">
                <span>Por Jean Mariños</span>
            </div>
            <div class="col s6 right-align">
                <span class="recipe__publish_date">Publicado el 12/12/2016</span>
            </div>
        </div>
      </div>
		)
	}
}