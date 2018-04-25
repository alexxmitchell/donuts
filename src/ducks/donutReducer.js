import axios from "axios";

const initialState = {
  kind: "",
  topping: 0,
  // topping2: 0,
  // topping3: 0,
  currentBox: {}, //holds the boxid
  box: [],
  donuts: [],
  cost: 1,
  isLoading: false,
  currentDonut: {},
  currentToppings: []
};

const ADD_KIND = "ADD_KIND";
const ADD_DONUT = "ADD_DONUT";
const REMOVE_DONUT = "REMOVE_DONUT";
const GET_DONUTS = "GET_DONUTS";

const CREATE_BOX = "CREATE_BOX";
const ADD_TO_BOX = "ADD_TO_BOX";
const GET_BOX = "GET_BOX";

const ADD_TOPPINGS = "ADD_TOPPINGS";
const GET_TOPPINGS = "GET_TOPPINGS";
const REMOVE_TOPPING = "REMOVE_TOPPING"; //need action
const CHANGE_TOPPING = "CHANGE_TOPPING";

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

export function addToppings(id, topping) {
  return {
    type: ADD_TOPPINGS,
    payload: axios.post(`/api/addTopping`, { id, topping })
  };
}

export function addDonut(kind) {
  return {
    type: ADD_DONUT,
    payload: axios.post(`/api/adddonut`, {
      kind
    })
  };
}

export function addToBox(id, donut) {
  return {
    type: ADD_TO_BOX,
    payload: axios.post(`/api/addbox/${id}/${donut}`)
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

export function removeDonut(userid, id) {
  return {
    type: REMOVE_DONUT,
    payload: axios.delete(`/api/removedonut/${id}`)
  };
}
export function getToppings(id) {
  return {
    type: GET_TOPPINGS,
    payload: axios.get(`/api/gettoppings/${id}`)
  };
}

export function changeTopping(id) {
  return {
    type: CHANGE_TOPPING,
    payload: axios.put(`/api/donut/${id}`)
  };
}

function donutReducer(state = initialState, action) {
  switch (action.type) {
    case `${CREATE_BOX}_FULFILLED`:
      return {
        ...state,
        currentBox: action.payload.data
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

    case `${REMOVE_DONUT}_FULFILLED`:
      return {
        ...state,
        donuts: action.payload.data
      };
    case `${GET_TOPPINGS}_FULFILLED`:
      return {
        ...state,
        currentToppings: state.currentToppings.concat(action.payload.data)
      };
    case `${CHANGE_TOPPING}_FULFILLED`:
      return {
        ...state,
        currentDonut: action.payload.data
      };
    case `${ADD_TO_BOX}_FULFILLED`:
      console.log("I hit add box");
      let doArr = state.donuts.slice();
      doArr.splice(action.payload, 1);
      return Object.assign({}, state, {
        donuts: doArr,
        box: action.payload.data
      });

    default:
      return state;
  }
}
export default donutReducer;
