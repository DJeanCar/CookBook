import slug from "slug";

export default class Recipe {

  constructor(category, name, chef, preparation, ingredients) {
    const now = new Date();
    this.id = this.id = Math.floor((Math.random() * 1000) + 1);
    this.category = category;
    this.name = name;
    this.slug = slug(name);
    this.chef = chef;
    this.preparation = preparation;
    this.date = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;
    this.stars = Math.floor((Math.random() * 5) + 1);
    this.ingredients = {"data": ingredients};
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      slug: this.slug,
      category : this.category,
      chef: this.chef,
      preparation: this.preparation,
      ingredients: this.ingredients,
      stars: this.stars,
      date: this.date
    };
  }

}