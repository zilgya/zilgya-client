import { combineReducers } from "redux";
import authReducer from "./auth";
import UserReducer from "./user";

const reducers = combineReducers({
    auth: authReducer,
    user: UserReducer,
})

export default reducers