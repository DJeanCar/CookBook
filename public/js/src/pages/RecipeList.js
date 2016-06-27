import React from "react";
import { Link } from "react-router";
import Recipe from "../components/Recipe";
import { recipeStore, rankingStore } from "../stores";
import { observer } from "mobx-react";

@observer
export default class RecipeList extends React.Component {

	onSubmit(e) {
		const input = e.target;
		setTimeout(() => {
			const name = input.value;
			recipeStore.searchRecipe(name);
		}, 1);
	}

	changeToRanking() {
		if (!rankingStore.ranking) {
			rankingStore.changeToRanking(!rankingStore.ranking);
		}
	}

	changeToRecently() {
		if (rankingStore.ranking) {
			rankingStore.changeToRanking(!rankingStore.ranking);
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
		const recipes = recipeStore.recipes;
		return (
			<div>
				<div class="container">
					<div class="row valign-wrapper">
	          <div class="col s6 m5 l6 valign">
	              <span class="subtitle bold">Recipes</span>
	              {this.menuActive(rankingStore.ranking)}
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
					{recipes.map((recipe, index) => (
						<Link to={`/recipes/${recipe.slug}`} key={recipe.id}>
							<div class="row">
			            <div class="col s12">
			            		<Recipe recipe={recipe} ranking={false} orden={index+1}/>
			            </div>
			        </div>
		        </Link>
		      ))}
			  </div>	

			</div>
		)
	}
}