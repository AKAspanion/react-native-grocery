import { INCREMENT_COUNT, DECREMENT_COUNT } from "../actions/types";

export const increment = () => {
  return {
    type: INCREMENT_COUNT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT_COUNT,
  };
};
