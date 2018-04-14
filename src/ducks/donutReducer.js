const initialState = {
  kind: "",
  peanuts: 0,
  bacon: 0,
  strawberries: 0,
  gold: 0,
  sprinkles: 0,
  chocdrizzle: 0,
  glaze: 0,
  pbdrizzle: 0,
  vanilladrizzle: 0
};

const ADD_KIND = "ADD_KIND";
const ADD_TOPPINGS = "ADD_TOPPINGS";
const ADD_DONUT = "ADD_DONUT";

export function addKind(kind) {
  return {
    type: ADD_KIND,
    payload: kind
  };
}

export function addToppings(
  peanuts,
  bacon,
  strawberries,
  gold,
  sprinkles,
  chocdrizzle,
  glaze,
  pbdrizzle,
  vanilladrizzle
) {
  return {
    type: ADD_TOPPINGS,
    payload: {
      peanuts,
      bacon,
      strawberries,
      gold,
      sprinkles,
      chocdrizzle,
      glaze,
      pbdrizzle,
      vanilladrizzle
    }
  };
}

// export function addDonut() {
//   axios.post(`/api/donut`);
// }

function donutReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_KIND:
      return {
        ...state,
        kind: action.payload
      };
    case ADD_TOPPINGS:
      return {
        ...state,
        ...action.payload
      };
    case ADD_DONUT:
      return {};

    default:
      return state;
  }
}
export default donutReducer;
