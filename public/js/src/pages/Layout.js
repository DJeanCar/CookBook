import React from "react";

import RecipeList from "./RecipeList";

export default class Layout extends React.Component {

	constructor(props) {
		super();
		props.getAllRecipes();
	}

	onSubmit(e) {
		const input = e.target;
		setTimeout(() => {
			const name = input.value;
			this.props.searchRecipe(name);
		}, 1);
	}

	changeToRanking() {
		if (!this.props.ranking) {
			this.props.changeToRanking(!this.props.ranking);
		}
	}

	changeToRecently() {
		if (this.props.ranking) {
			this.props.changeToRanking(!this.props.ranking);
		}
	}

	menuActive(ranking) {
		if (!ranking) {
			return <div class="recipes__filter">
                <span class="active pointer" onClick={this.changeToRecently.bind(this)}>Recently</span>
                <span>|</span>
                <span class="pointer" onClick={this.changeToRanking.bind(this)}>Ranking</span> 
            </div>
		} else {
			return <div class="recipes__filter">
                <span class="pointer" onClick={this.changeToRecently.bind(this)}>Recently</span>
                <span>|</span>
                <span class="pointer active" onClick={this.changeToRanking.bind(this)}>Ranking</span> 
            </div>
		}
	}

	render() {
		const { recipes, searchRecipe, ranking } = this.props;
		return (
			<section class="recipes">
				<div class="container">
						<div class="row valign-wrapper">
	            <div class="col s6 m5 l6 valign">
	                <span class="subtitle bold">Recipes</span>
	                {this.menuActive(ranking)}
	            </div>
	            <div class="col s4 m5 l4 valign input-field">
	                    <i class="material-icons prefix"></i>
	                    <input id="icon_prefix" 
	                    	   type="text" 
	                    	   class="validate" 
	                    	   onKeyDown={this.onSubmit.bind(this)} />
	                    <label for="icon_prefix">Search recipes</label>
	            </div>
	            <div class="col s2 m2 l2 valign right-align">
	                <a class="waves-effect waves-light btn modal-trigger" href="#">New recipe</a>
	            </div>
	        </div>
				</div>
				<RecipeList recipes={recipes} ranking={ranking} />
			</section>
		)
	}
}