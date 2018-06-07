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
  total: 0,
  category: "",
  toppings: [],
  previous: [],
  currDonutTop: []
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
const CLEAR_BOX = "CLEAR_BOX";

const GET_ALL_TOPPINGS = "GET_ALL_TOPPINGS";
const ADD_TOPPINGS = "ADD_TOPPINGS";
const GET_TOPPINGS = "GET_TOPPINGS";
const REMOVE_TOPPING = "REMOVE_TOPPING";
const CHANGE_TOPPING = "CHANGE_TOPPING";
const CURRENT_DONUT_TOP = "CURRENT_DONUT_TOP";
const CLEAR_TOPPINGS = "CLEAR_TOPPINGS";

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

export function removeDonut(userid, id, boxid) {
  // console.log(boxid);
  return {
    type: REMOVE_DONUT,
    payload: axios.delete(`/api/removedonut/${id}/${boxid}`)
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

export function removeTopping(donut, topping) {
  return {
    type: REMOVE_TOPPING,
    payload: axios.delete(`/api/removetopping/${donut}/${topping}`)
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

export function currentDonutTop(id) {
  return {
    type: CURRENT_DONUT_TOP,
    payload: axios.get(`/api/gettoppings/${id}`)
  };
}
export function clearToppings() {
  return {
    type: CLEAR_TOPPINGS,
    payload: []
  };
}

export function clearBox() {
  return {
    type: CLEAR_BOX
  };
}
function donutReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_BOX:
      return {
        kind: "",
        topping: 0,
        currentBox: {},
        box: [],
        donuts: [],
        cost: 1,
        isLoading: false,
        currentDonut: {},
        currentToppings: [],
        boxToppings: [],
        total: 0,
        category: "",
        toppings: [],
        previous: [],
        currDonutTop: []
      };
    case `${CREATE_BOX}_FULFILLED`:
      return {
        ...state,
        currentBox: action.payload.data[0]
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
      // console.log(action);
      return {
        ...state,
        box: action.payload.data
      };
    case `${GET_TOPPINGS}_FULFILLED`:
      return {
        ...state,
        currentToppings: state.currentToppings.concat(action.payload.data)
      };
    case CLEAR_TOPPINGS:
      return {
        ...state,
        currentToppings: action.payload
      };
    case `${CHANGE_TOPPING}_FULFILLED`:
      return {
        ...state,
        currentDonut: action.payload.data
      };
    case `${ADD_TO_BOX}_FULFILLED`:
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
        total: Number(action.payload.data)
      };
    case `${CURRENT_DONUT_TOP}_FULFILLED`:
      return {
        ...state,
        currDonutTop: action.payload.data
      };
    case `${REMOVE_TOPPING}_FULFILLED`:
      return {
        ...state,
        currentToppings: action.payload.data
      };

    default:
      return state;
  }
}
export default donutReducer;
