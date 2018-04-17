import React from "react";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import donutReducer from "./donutReducer";

export default createStore(donutReducer, applyMiddleware(promiseMiddleware()));
