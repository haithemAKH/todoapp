import { combineReducers } from "redux";
import listReducer from "./ListTaskreducer";

// Combine the reducers
const rootReducer = combineReducers({ listReducer });

export default rootReducer;
