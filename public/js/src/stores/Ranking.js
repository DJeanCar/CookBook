import { observable } from "mobx";
import { recipeStore } from "./index";


export default class Ranking {
  @observable ranking = false;

  changeToRanking(ranking) {
    this.ranking = ranking;
    recipeStore.sendRecipesToUI(this.ranking);
  }

  changeToRecently(ranking) {
    this.ranking = ranking;
    recipeStore.sendRecipesToUI(this.ranking);
  }

}