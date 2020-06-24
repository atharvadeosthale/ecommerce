import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import app from "./app";

export default combineReducers({
  alert,
  auth,
  app,
});
