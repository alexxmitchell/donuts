import React from "react";
import { createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import donutReducer from "./donutReducer";

export default createStore(donutReducer);
