import React from "react";
import { Link } from "react-router";
import Recipe from "../components/Recipe";

export default class RecipeList extends React.Component {

	componentWillMount() {
		// this.props.fetchRecipes();
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
		// const { recipes, ranking } = this.props;
		return (
			<div>
				<div class="container">
					<div class="row valign-wrapper">
	          <div class="col s6 m5 l6 valign">
	              <span class="subtitle bold">Recipes</span>
	              {this.menuActive(false)}
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
	          	<Link class="waves-effect waves-light btn modal-trigger" to="newRecipe">New recipe</Link>
	          </div>
	      	</div>
				</div>
				<div class="container">
						<Link to={`/recipes/ceviche`} key="1">
							<div class="row">
			            <div class="col s12">
			            		<Recipe />
			            </div>
			        </div>
		        </Link>
		        <Link to={`/recipes/pollo`} key="2">
							<div class="row">
			            <div class="col s12">
			            		<Recipe />
			            </div>
			        </div>
		        </Link>
			  </div>
			</div>
		)
	}
}