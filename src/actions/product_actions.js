import * as actionTypes from "constants/action_types";

export const getProducts = (products) => ({
  type: actionTypes.GET_PRODUCTS,
  payload: {
    products,
  },
});
