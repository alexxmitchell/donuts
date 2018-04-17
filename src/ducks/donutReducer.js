import axios from "axios";

const initialState = {
  kind: "",
  // peanuts: 0,
  // bacon: 0,
  // strawberries: 0,
  // gold: 0,
  // sprinkles: 0,
  // chocdrizzle: 0,
  // glaze: 0,
  // pbdrizzle: 0,
  topping1: "",
  topping2: "",
  topping3: "",
  box: [],
  donuts: [],
  price: 2,
  isLoading: false
};

const ADD_KIND = "ADD_KIND";
const ADD_TOPPINGS = "ADD_TOPPINGS";
const ADD_DONUT = "ADD_DONUT";
const ADD_TO_BOX = "ADD_TO_BOX";
const REMOVE_TOPPING = "REMOVE_TOPPING"; //need action
const GET_BOX = "GET_BOX";
const GET_DONUTS = "GET_DONUTS";

export function addKind(kind) {
  return {
    type: ADD_KIND,
    payload: kind
  };
}

export function addToppings(
  // peanuts,
  // bacon,
  // strawberries,
  // gold,
  // sprinkles,
  // chocdrizzle,
  // glaze,
  // pbdrizzle
  topping1,
  topping2,
  topping3
) {
  return {
    type: ADD_TOPPINGS,
    payload: {
      // peanuts,
      // bacon,
      // strawberries,
      // gold,
      // sprinkles,
      // chocdrizzle,
      // glaze,
      // pbdrizzle
      topping1,
      topping2,
      topping3
    }
  };
}

export function addDonut(
  kind,
  // peanuts,
  // bacon,
  // strawberries,
  // gold,
  // sprinkles,
  // chocdrizzle,
  // glaze,
  // pbdrizzle
  topping1,
  topping2,
  topping3,
  price
) {
  return {
    type: ADD_DONUT,
    payload: axios.post(`/api/donut`, {
      kind,
      // peanuts,
      // bacon,
      // strawberries,
      // gold,
      // sprinkles,
      // chocdrizzle,
      // glaze,
      // pbdrizzle
      topping1,
      topping2,
      topping3,
      price
    })
  };
}

export function addToBox() {
  return {
    type: ADD_TO_BOX
    // payload: box
  };
}

export function getBox(id) {
  return {
    type: GET_BOX,
    payload: axios.get(`/api/box`)
  };
}

export function getDonuts() {
  return {
    type: GET_DONUTS,
    payload: axios.get("/api/donuts").then(response => {
      return response.data;
    })
  };
}

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
    case `${ADD_DONUT}_FULFILLED`:
      return {
        ...state,
        ...action.payload
      };
    case `${GET_BOX}_FULFILLED`:
      return {
        ...state,
        box: action.payload.data
      };
    case `${GET_DONUTS}_FULFILLED`:
      return Object.assign({}, state, {
        donuts: action.payload,
        isLoading: false
      });
    case `${GET_DONUTS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
}
export default donutReducer;
