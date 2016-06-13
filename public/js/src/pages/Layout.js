import React from "react";

import RecipeList from "./RecipeList";

export default class Layout extends React.Component {
	render() {
		return (
			<section class="recipes">
				<div class="container">
						<div class="row valign-wrapper">
	            <div class="col s6 m5 l6 valign">
	                <span class="subtitle bold">Recipes</span>
	                <div class="recipes__filter">
	                    <span class="active pointer">Recently</span>
	                    <span>|</span>
	                    <span class="pointer">Ranking</span> 
	                </div>
	            </div>
	            <div class="col s4 m5 l4 valign input-field">
	                    <i class="material-icons prefix"></i>
	                    <input id="icon_prefix" type="text" class="validate" />
	                    <label for="icon_prefix">Search recipes</label>
	            </div>
	            <div class="col s2 m2 l2 valign right-align">
	                <a class="waves-effect waves-light btn modal-trigger" href="#">New recipe</a>
	            </div>
	        </div>
				</div>
				<RecipeList recipes={this.props.recipes}/>
			</section>
		)
	}
}