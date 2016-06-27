import React from "react";
import { Link } from "react-router";

export default class RecipeDetail extends React.Component {

  componentWillMount() {
    if (!this.props.currentRecipe) {
      this.props.history.push('/');
    }
  }

  removeRecipe(slug) {
    this.props.deleteRecipe(slug);
    this.props.history.push('/');
  }

  populateIngredients(recipe) {
    if (recipe && recipe.get("ingredients") !== null) {
      return <ul class="recipe__ingredients">
        {recipe.get("ingredients").get("data").map( (ingredient, index) => {
          return (
            <li class='regular' key={index}>
              <span class='bold'>{ingredient.get("name")}: </span>
              <span>{ingredient.get("amount")}</span>
            </li>
          );
        })}
      </ul>
    }
  }

  render() {
    const recipe  = this.props.currentRecipe;
    const band = false;
    const slug = recipe ? recipe.get("slug") : ""; 
    return(
      <section class="recipes">
        <div class="container">
          <div class="row">
            <div class="col s12 regular">
              <Link to="/" class="back-link">Return</Link>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col s12 m6 l8">
              <div class="recipe__header">
                <div class="row no-margin-bottom">
                  <div class="col s12">
                    <div class="recipe__title">
                      <h3>{recipe && recipe.get("name")}</h3>
                    </div>
                  </div>
                  <div class="col s12"> 
                    <div class="recipe__options">
                      <a href="#!" class="btn waves-effect teal">Update</a>
                      <button class="btn waves-effect red" onClick={this.removeRecipe.bind(this, slug)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recipe_info">
                <div class="row">
                  <div class="col s12 l6 recipe_info__item">
                    <div class="bold recipe_info__subtitle subtitle">Chef: </div>
                    <div class="regular">{recipe && recipe.get("chef")}</div>
                  </div>
                  <div class="col s12 l6 recipe_info__item">
                    <div class="bold recipe_info__subtitle subtitle">Category: </div>
                    <div class="recipe__category chip regular">{recipe && recipe.get("category")}</div>
                  </div>
                  <div class="col s12 l6 recipe_info__item">
                    <span class="bold recipe_info__subtitle subtitle">Ingredients: </span>
                    <ul class="recipe__ingredients">
                      <div>{this.populateIngredients(recipe)}</div>
                    </ul>
                  </div>
                  <div class="col s12 l6 recipe_info__item">
                    <div class="bold recipe_info__subtitle subtitle">Preparation: </div>
                    <div class="regular">{recipe && recipe.get("preparation")}</div>
                  </div>
                </div>
              </div>

              <div class="recipe_comments">
                <div class="recipe_comments__title subtitle">
                  <div class="bold">Comments</div>
                </div>
                <div class="recipe_comments__body">
                  <div class="row">
                    <div class="col s12">
                      <div class="comment">
                        <div class="comment__content regular">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos provident impedit earum vitae aliquid obcaecati. Nobis similique quas, beatae molestiae quis quia, labore libero laborum, atque asperiores quidem qui, sapiente.
                        </div>
                        <div class="comment__user italic">
                          <span>Por </span>
                          <span class="bold">Jean Carlos</span>
                        </div>
                      </div>
                      <div class="comment">
                        <div class="comment__content regular">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos provident impedit earum vitae aliquid obcaecati. Nobis similique quas, beatae molestiae quis quia, labore libero laborum, atque asperiores quidem qui, sapiente.
                        </div>
                        <div class="comment__user italic regular">
                          <span>Por </span>
                          <span class="bold">Jean Carlos</span>
                        </div>
                      </div>
                      <div class="comment">
                        <div class="comment__content regular">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos provident impedit earum vitae aliquid obcaecati. Nobis similique quas, beatae molestiae quis quia, labore libero laborum, atque asperiores quidem qui, sapiente.
                        </div>
                        <div class="comment__user italic">
                          <span>Por </span>
                          <span class="bold">Jean Carlos</span>
                        </div>
                      </div>
                    </div>
                    <div class="col s12">
                      <div class="comment_form">
                        <div class="subtitle bold">
                          Deja un comentario
                        </div>
                        <div class="input-field">
                          <textarea id="recipe_comment" class="materialize-textarea"></textarea>
                          <label for="recipe_comment">Type your comment here</label>
                        </div>
                        <div class="comment_form__button">
                          <a class="waves-effect waves-light btn">Send</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col s12 m6 l4">
              <div class="row">
                <div class="col s12">
                  <div class="subtitle bold center-align">Tell us your opinion</div>
                </div>
                <div class="col s12">
                  <div class="rating center-align">
                    <div class="stars">
                      <p>
                        <input name="star" type="radio" id="star1" value="1" />
                        <label for="star1">
                          <span data-icon="&#xe9d7;" class="star">1</span>
                        </label>
                      </p>
                      <p>
                        <input name="star" type="radio" id="star2" value="2" />
                        <label for="star2">
                          <span data-icon="&#xe9d7;" class="star">2</span>
                        </label>
                      </p>
                      <p>
                        <input name="star" type="radio" id="star3" value="3" />
                        <label for="star3">
                          <span data-icon="&#xe9d7;" class="star">3</span>
                        </label>
                      </p>
                      <p>
                        <input name="star" type="radio" id="star4" value="4" />
                        <label for="star4">
                          <span data-icon="&#xe9d7;" class="star">4</span>
                        </label>
                      </p>
                      <p>
                        <input name="star" type="radio" id="star5" value="5" />
                        <label for="star5">
                          <span data-icon="&#xe9d7;" class="star">5</span>
                        </label>
                      </p>
                    </div>
                    <a href="#!" class="btn waves-effect teal">Votar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
