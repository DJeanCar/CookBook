const ranking = (state=false, action) => {
  switch (action.type) {

    case "CHANGE_TO_RANKING":
      return action.payload;

    default:
      return state;

  }
}

export default ranking;