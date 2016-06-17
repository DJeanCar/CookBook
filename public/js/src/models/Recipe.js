import slug from "slug";

export default class Recipe {

  constructor(category, name, chef, preparation, ingredients) {
    const now = new Date();

    this.id = slug(name);
    this.category = category;
    this.name = name;
    this.chef = chef;
    this.preparation = preparation;
    this.date = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;
    this.stars = 0;
    this.ingredients = ingredients;
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      category : this.category,
      chef: this.chef,
      preparation: this.preparation,
      ingredients: this.ingredients,
      stars: this.stars,
      date: this.date
    };
  }

}