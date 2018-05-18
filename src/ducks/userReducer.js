import axios from "axios";

const initialState = {
  user: [],
  name: "",
  email: "",
  address: "",
  city: "",
  st: "",
  zip: ""
};

const GET_USER = "GET_USER";
const UPDATE_USER = "UPDATE_USER";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/person")
  };
}

export function updateUser(id, name, email, address, city, st, zip) {
  console.log("i hit");
  return {
    type: UPDATE_USER,
    payload: axios.put(`/api/updateprofile`, {
      id,
      name,
      email,
      address,
      city,
      st,
      zip
    })
  };
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    case `${UPDATE_USER}_FULFILLED}`:
      console.log(action);
      return {
        ...state,
        user: action.payload.data
      };

    default:
      return state;
  }
}
