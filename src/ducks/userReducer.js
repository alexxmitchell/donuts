import axios from "axios";

const initialState = {
  user: []
};

const GET_USER = "GET_USER";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/person")
  };
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };

    default:
      return state;
  }
}
