import { combineReducers } from "redux";
import authReducer from "./auth";
import { cartReducer } from "./cart";
import { searchReducer } from "./search";
import UserReducer from "./user";

const reducers = combineReducers({
  auth: authReducer,
  user: UserReducer,
  search: searchReducer,
  cart: cartReducer
});

export default reducers;
