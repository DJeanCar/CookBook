import React from "react";

export default class Header extends React.Component {
  render() {
    return(
      <header class="home_intro">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h1 class="center-align header__title">CookBook</h1>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <h2 class="center-align header__description">The best cooking recipes</h2>
                </div>
            </div>
        </div>
      </header>
    );
  }
}