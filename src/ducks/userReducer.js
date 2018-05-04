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
const LOGOUT = "LOGOUT";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/person")
  };
}

export function updateUser(id, name, email, address, city, st, zip) {
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

export function logout() {
  return {
    type: LOGOUT,
    payload: axios.get("/api/logout")
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
      return {
        ...state,
        user: action.payload.data
      };
    case `${LOGOUT}_FULFILLED`:
      return {
        ...state,
        user: [],
        name: "",
        email: "",
        address: "",
        city: "",
        st: "",
        zip: ""
      };

    default:
      return state;
  }
}
