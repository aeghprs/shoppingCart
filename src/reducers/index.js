import { combineReducers } from "redux";

import { cartReducer } from "./cart_reducers";

const reducers = combineReducers({
  cart: cartReducer,
});

export default reducers;
