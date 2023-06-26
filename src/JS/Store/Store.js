import { createStore } from "redux";
import rootReducer from "../Reducers";

// Create the Redux store
const store = createStore(rootReducer);

export default store;
