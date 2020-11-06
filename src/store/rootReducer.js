import {combineReducers} from "redux";
import {messageReducer} from "./messageReducer";
import {offerReducer} from "./offerReducer";


export default combineReducers({
  message: messageReducer,
  offers: offerReducer,
});
