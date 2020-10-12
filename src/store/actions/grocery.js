import { ADD_GROCERY_ITEM, REMOVE_GROCERY_ITEM } from "../actions/types";

export const addGroceryItem = (groceryItem) => {
  return {
    type: ADD_GROCERY_ITEM,
    payload: groceryItem,
  };
};

export const removeGroceryItem = (groceryItem) => {
  return {
    type: REMOVE_GROCERY_ITEM,
    payload: groceryItem,
  };
};
