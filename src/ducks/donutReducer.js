import axios from "axios";

const initialState = {
  kind: "",
  topping1: "",
  topping2: "",
  topping3: "",
  box: [],
  donuts: [],
  price: "$2.00",
  isLoading: false,
  currentDonut: {},
  currentToppings: []
};

const ADD_KIND = "ADD_KIND";
const ADD_TOPPINGS = "ADD_TOPPINGS";
const ADD_DONUT = "ADD_DONUT";
const ADD_TO_BOX = "ADD_TO_BOX";
const REMOVE_TOPPING = "REMOVE_TOPPING"; //need action
const REMOVE_DONUT = "REMOVE_DONUT";
const GET_BOX = "GET_BOX";
const GET_DONUTS = "GET_DONUTS";
const CREATE_BOX = "CREATE_BOX";

export function createBox(id) {
  return {
    type: CREATE_BOX,
    payload: axios.post("/api/createbox", { id })
  };
}
export function addKind(kind) {
  return {
    type: ADD_KIND,
    payload: kind
  };
}

export function addToppings(id, topping1) {
  console.log(id, topping1);
  return {
    type: ADD_TOPPINGS,
    payload: axios.post(`/api/addTopping`, { id, topping1 })
  };
}

export function addDonut(kind) {
  console.log(kind);
  return {
    type: ADD_DONUT,
    payload: axios.post(`/api/adddonut`, {
      kind
    })
  };
}

export function addToBox(id) {
  return {
    type: ADD_TO_BOX,
    payload: axios.post(`/api/addbox/${id}`)
  };
}

export function getDonuts(id) {
  return {
    type: GET_DONUTS,
    payload: axios.get("/api/mydonuts")
  };
}

export function getBox(id) {
  return {
    type: GET_BOX,
    payload: axios.get(`/api/box/${id}`)
  };
}

export function removeDonut(id) {
  return {
    type: REMOVE_DONUT,
    payload: axios.delete(`/api/removedonut/${id}`)
  };
}

function donutReducer(state = initialState, action) {
  switch (action.type) {
    case `${CREATE_BOX}_FULFILLED`:
      return {
        ...state,
        box: action.payload
      };
    case ADD_KIND:
      return {
        ...state,
        kind: action.payload
      };
    case `${ADD_TOPPINGS}_FULFILLED`:
      return {
        ...state,
        currentToppings: action.payload.data
      };
    case `${ADD_DONUT}_FULFILLED`:
      return {
        ...state,
        currentDonut: action.payload.data
      };
    case `${GET_BOX}_FULFILLED`:
      return {
        ...state,
        box: action.payload.data
      };
    case `${GET_DONUTS}_FULFILLED`:
      return {
        ...state,
        donuts: action.payload.data,
        isLoading: false
      };

    case `${GET_BOX}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${REMOVE_DONUT}_FULFILLED`:
      return {
        ...state,
        donuts: action.payload
      };
    default:
      return state;
  }
}
export default donutReducer;
