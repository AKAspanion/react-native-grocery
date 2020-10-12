import { SET_ON_BOARDED } from "../actions/types";

export const INITIAL_STATE = {
  onBoarded: false,
};

const flagReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_ON_BOARDED:
      return {
        ...state,
        onBoarded: payload,
      };
    default:
      return state;
  }
};

export default flagReducer;
