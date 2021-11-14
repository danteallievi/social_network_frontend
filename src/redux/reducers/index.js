import { combineReducers } from "redux";
import userReducer from "./userReducer";
import socialReducer from "./socialReducer";

const rootReducer = combineReducers({
  user: userReducer,
  social: socialReducer,
});

export default rootReducer;
