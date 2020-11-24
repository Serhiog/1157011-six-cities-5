import {combineReducers} from "redux";
import {messageReducer} from "./message/messageReducer";
import {offerReducer} from "./offers/offerReducer";
import {userStateReducer} from "./user/userReducer";

export default combineReducers({
  message: messageReducer,
  offers: offerReducer,
  user: userStateReducer,
});
