import { combineReducers } from "@reduxjs/toolkit";

import groceryReducer from "./groceryReducer";
import countReducer from "./countReducer";

const reducer = combineReducers({
  groceryState: groceryReducer,
  countState: countReducer,
});

export default reducer;
