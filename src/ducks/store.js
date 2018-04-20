import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import donutReducer from "./donutReducer";
import userReducer from "./userReducer";
export default createStore(
  combineReducers({ donutReducer, userReducer }),
  applyMiddleware(promiseMiddleware())
);
