import { ADD_GROCERY_ITEM, REMOVE_GROCERY_ITEM } from "../actions/types";

export const INITIAL_STATE = {
  groceryItems: [],
};

const groceryReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_GROCERY_ITEM:
      return {
        ...state,
        groceryItems: state.groceryItems.concat({
          key: Math.random(),
          ...payload,
        }),
      };
    case REMOVE_GROCERY_ITEM:
      return {
        ...state,
        groceryItems: state.groceryItems.filter(
          (item) => item.key !== payload.key
        ),
      };
    default:
      return state;
  }
};

export default groceryReducer;
