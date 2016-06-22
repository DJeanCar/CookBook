const ingredients = (state=1, action) => {
  switch (action.type) {

    case "ADD_INGREDIENT":
      return (state < 10) ? state + 1 : state

    case "SET_INGREDIENT_TO_ONE":
      return 1;

    default:
      return state;

  }

}

export default ingredients;