import {
  ADD_TO_CART,
  ADD_GROCERY_ITEM,
  CLEAR_FROM_CART,
  REMOVE_FROM_CART,
  REMOVE_GROCERY_ITEM,
} from "../actions/types";

export const INITIAL_STATE = {
  groceryItems: [],
  cart: {},
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
    case ADD_TO_CART:
      const newCart = { ...state.cart };
      if (newCart[payload.id]) {
        newCart[payload.id]++;
      } else {
        newCart[payload.id] = 1;
      }
      return {
        ...state,
        cart: { ...newCart },
      };
    case REMOVE_FROM_CART:
      const newCart2 = { ...state.cart };
      if (newCart2[payload.id]) {
        if (newCart2[payload.id] <= 1) {
          newCart2[payload.id] = 0;
        } else {
          newCart2[payload.id]--;
        }
      } else {
        newCart2[payload.id] = 0;
      }
      return {
        ...state,
        cart: { ...newCart2 },
      };
    case CLEAR_FROM_CART:
      const newCart3 = { ...state.cart };
      if (newCart3[payload.id]) {
        newCart3[payload.id] = 0;
      }
      return {
        ...state,
        cart: { ...newCart3 },
      };
    default:
      return state;
  }
};

export default groceryReducer;
