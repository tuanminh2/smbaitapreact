import { combineReducers } from "redux";

import taskReducer from "./taskReducer";

const allReducers = combineReducers({
    taskReducer,
  // add more reducers here
});

export default allReducers;