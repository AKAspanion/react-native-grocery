import { INCREMENT_COUNT, DECREMENT_COUNT } from "../actions/types";

export const INITIAL_STATE = {
  count: 0,
};

const countReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
