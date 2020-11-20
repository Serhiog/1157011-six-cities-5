import {combineReducers} from "redux";
import {messageReducer} from "./messageReducer";
import {offerReducer} from "./offerReducer";
import {backendReducer} from "./backendReducer";
import {userStateReducer} from "./userStateReducer";

export default combineReducers({
  message: messageReducer,
  offers: offerReducer,
  backend: backendReducer,
  userStatus: userStateReducer,
});
