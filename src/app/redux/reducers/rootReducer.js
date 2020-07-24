import { combineReducers } from "redux";
import launches from "./launches";
import history from "./history";

export default combineReducers({
  launches,
  history
});
