import { combineReducers } from "redux";
import authReducer from "./auth";
import { searchReducer } from "./search";
import UserReducer from "./user";

const reducers = combineReducers({
  auth: authReducer,
  user: UserReducer,
  search: searchReducer,
});

export default reducers;
