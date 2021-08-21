const user_reducer = (state = [], action) => {
  if (action.type == "FETCH_USER") {
    console.log(action);
    return action.payload;
  }
  // switch (action.type) {
  //   case "INCREMENT":
  //     return state + 1;

  //   default:

  // }
  return state;
};
export default user_reducer;
