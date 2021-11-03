import { combineReducers } from "redux";
import kidsReducer from "./kids.reducer";
import userReducer from "./user.reducer";
import selectedKidsReducer from "./addselectedkids.reducer";
import activityReducer from "./activity.reducer";

export default combineReducers({
  kidsReducer,
  userReducer,
  selectedKidsReducer,
  activityReducer,
});
