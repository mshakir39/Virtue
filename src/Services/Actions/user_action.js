export const getlist = (data) => {
  return {
    type: "FETCH_USER",
    payload: data,
  };
};

export const fetch_list = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((res2) => {
        dispatch({ type: "FETCH_USER", payload: res2 });
      });
  };
};
