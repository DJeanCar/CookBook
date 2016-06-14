import { List, Map } from "immutable";

// const init = List([]);

const init = List([
  Map({ id: 0, stars: 5, name: "Ceviche", date: "15/12/2016", author: "Jean Mariños", category: "Pescado"}),
  Map({ id: 1, stars: 4, name: "Arroz con Pollo", date: "15/12/2016", author: "Miguel Villanueva", category: "Criollo"}),
  Map({ id: 2, stars: 3, name: "Home Made Bolognese Pasta", date: "01/05/2016", author: "Julio Grados", category: "Pastas"}),
  Map({ id: 3, stars: 4, name: "Arroz con Maricos", date: "10/07/2016", author: "Edwin Gonzales", category: "pescado"}),
  Map({ id: 4, stars: 3.4, name: "Ceviche", date: "15/12/2016", author: "Jean Mariños", category: "pescado"}),
  Map({ id: 5, stars: 4, name: "Arroz con Pollo", date: "15/12/2016", author: "Miguel Villanueva", category: "Criollo"}),
  Map({ id: 6, stars: 3, name: "Home Made Bolognese Pasta", date: "31/07/2016", author: "Julio Grados", category: "Pastas"}),
])


export default function (recipes=init, action) {

	switch(action.type) {
    
    case "SEARCH_RECIPE":
      const newRecipes = [];
      init.map(recipe => {
        const name = recipe.get("name").toLowerCase();
        if (name.indexOf(action.payload) > -1) {
          newRecipes.push(recipe);
        }
      });
      return List(newRecipes)

    default:
      return recipes
  }

}