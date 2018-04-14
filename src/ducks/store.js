import React from "react";
import { createStore } from "redux";

import donutReducer from "./donutReducer";

export default createStore(donutReducer);
