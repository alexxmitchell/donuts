import axios from "axios";

const initialState = {
  kind: "",
  topping: 0,
  currentBox: {}, //holds the boxid
  box: [],
  donuts: [],
  cost: 1,
  isLoading: false,
  currentDonut: {},
  currentToppings: [],
  boxToppings: [],
  total: [],
  category: "",
  toppings: [],
  previous: []
};

const ADD_KIND = "ADD_KIND";
const ADD_DONUT = "ADD_DONUT";
const REMOVE_DONUT = "REMOVE_DONUT";
const GET_DONUTS = "GET_DONUTS";

const CREATE_BOX = "CREATE_BOX";
const ADD_TO_BOX = "ADD_TO_BOX";
const GET_BOX = "GET_BOX";
const GET_BOXTOPS = "GET_BOXTOPS";
const GET_TOTAL = "GET_TOTAL";
const PREVIOUS_ORDERS = "PREVIOUS_ORDERS";

const GET_ALL_TOPPINGS = "GET_ALL_TOPPINGS";
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

export function getAllToppings() {
  return {
    type: GET_ALL_TOPPINGS,
    payload: axios.get("/api/alltoppings")
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
    payload: axios.put(`/api/addbox/${id}/${donut}`)
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
export function getBoxtops(id) {
  return {
    type: GET_BOXTOPS,
    payload: axios.get(`/api/boxtops/${id}`)
  };
}

export function getTotal(id) {
  return {
    type: GET_TOTAL,
    payload: axios.get(`/api/total/${id}`)
  };
}
export function previousOrders(id) {
  return {
    type: PREVIOUS_ORDERS,
    payload: axios.get(`/api/oldboxes`)
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
    case `${GET_ALL_TOPPINGS}_FULFILLED`:
      return {
        ...state,
        toppings: action.payload.data
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
    case `${GET_BOXTOPS}_FULFILLED`:
      return {
        ...state,
        boxToppings: action.payload.data
      };
    case `${GET_TOTAL}_FULFILLED`:
      return {
        ...state,
        total: action.payload.data
      };
    case `${PREVIOUS_ORDERS}_FULFILLED`:
      return {
        ...state,
        previous: action.payload.data
      };

    default:
      return state;
  }
}
export default donutReducer;
