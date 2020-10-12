import { combineReducers } from "@reduxjs/toolkit";

import groceryReducer from "./groceryReducer";
import flagsReducer from "./flagsReducer";
import countReducer from "./countReducer";

const reducer = combineReducers({
  groceryState: groceryReducer,
  countState: countReducer,
  flagsState: flagsReducer,
});

export default reducer;
