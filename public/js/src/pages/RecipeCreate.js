import React from "react";
import { Link } from "react-router";

import Recipe from "../models/Recipe";
import { recipeStore } from "../stores";
import { observer } from "mobx-react";

@observer
export default class RecipeCreate extends React.Component {

  setIngredientsInput() {
    const ingredients = Array.from(Array(recipeStore.ingredients).keys())
    return <ul ref="ingredients">
      {ingredients.map((element, i) => {
        return (
          <li key={`ingredient${i}`}>
            <div class="input-field col s10">
              <input id={`ingredientName${i}`} type="text" class="validate" ref={`ingredient${i}`} required />
              <label for={`ingredientName${i}`}>Ingredient {i + 1}</label>
            </div>
            <div class="input-field col s2">
              <input id={`amount${i}`} type="text" class="validate" ref={`amount${i}`} required />
              <label for={`amount${i}`}>Amount</label>
            </div>
          </li>
        );
      })}
    </ul>
  }

  addIngredients() {
    recipeStore.addIngredient();
  }

  saveRecipe(e) {
    e.preventDefault();
    const { chef, name, preparation, category } = this.refs;
    const ingredients = [];
    for (let i = 0; i < recipeStore.ingredients; i++) {
      ingredients.push({
        name: this.refs[`ingredient${i}`].value,
        amount: this.refs[`amount${i}`].value
      });
    }
    const recipe = new Recipe(category.value, name.value, chef.value, preparation.value, ingredients);
    recipeStore.addRecipe(recipe.toJson());
    this.props.history.pushState(null, '/');
  }

  render() {
    return(
      <section class="recipes">
        <div class="container">
          <div class="row">
            <div class="col s12">
              <h4 class="center-align recipes__create_title">Create a Recipe</h4>
            </div>
          </div>
          <div class="recipes__form">
            <div class="row">
              <form class="col s12" onSubmit={this.saveRecipe.bind(this)}>
                <div class="row">
                  <div class="input-field col s12">
                    <select class="browser-default" ref="category" id="cmbCategory" required>
                      <option value="Salads">Salads</option>
                      <option value="Pasta">Pasta</option>
                      <option value="Dessert">Dessert</option>
                      <option value="Meat">Meat</option>
                    </select>
                  </div>
                  <div class="input-field col s12">
                    <input id="last_name" type="text" class="validate" ref="name" required />
                    <label for="last_name">Recipe Name</label>
                  </div>
                  <div class="input-field col s12">
                    <input id="last_name" type="text" class="validate" ref="chef" required />
                    <label for="last_name">Chef</label>
                  </div>
                  {this.setIngredientsInput()}
                  <div class="input-field col s12 no-margin-top right-align">
                    <span class="ingredient__add " onClick={this.addIngredients.bind(this)}>Add ingredient</span>
                  </div>
                  <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea" ref="preparation" required></textarea>
                    <label for="textarea1">Preparation</label>
                  </div>
                  <div class="col s12 no-margin-top">
                    <button class="btn waves-effect teal recipe__btn_create" type="submit">Add Recipe</button>
                    <Link to="/" class="btn waves-effect red recipe__btn_create">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}