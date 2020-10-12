import { SET_ON_BOARDED } from "../actions/types";

export const setOnBoarded = (flag) => {
  return {
    type: SET_ON_BOARDED,
    payload: flag,
  };
};
