const initialState = {
  kind: "",
  peanuts: 0,
  bacon: 0,
  strawberries: 0,
  gold: 0,
  sprinkles: 0,
  chocdrizzle: 0,
  glaze: 0,
  pbdrizzle: 0
};

const ADD_DONUT = "ADD_DONUT";

export function addDonut(
  kind,
  peanuts,
  bacon,
  strawberries,
  gold,
  sprinkles,
  chocdrizzle,
  glaze,
  pbdrizzle
) {
  return {
    type: ADD_DONUT,
    payload: {
      kind,
      peanuts,
      bacon,
      strawberries,
      gold,
      sprinkles,
      chocdrizzle,
      glaze,
      pbdrizzle
    }
  };
}

function donutReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DONUT:
    // axios.post
  }
}
export default donutReducer;
