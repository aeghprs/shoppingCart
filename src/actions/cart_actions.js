import * as actionTypes from "constants/action_types";

export const addToCart = (itemID) => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id: itemID,
  },
});

export const removeFromCart = (itemID) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id: itemID,
  },
});

export const increaseItemQty = (itemID, qty) => ({
  type: actionTypes.INCREASE_ITEM_QTY,
  payload: {
    id: itemID,
    qty,
  },
});

export const decreaseItemQty = (itemID, qty) => ({
  type: actionTypes.DECREASE_ITEM_QTY,
  payload: {
    id: itemID,
    qty,
  },
});

export const emptyCart = () => ({
  type: actionTypes.EMPTY_CART,
  payload: {},
});
