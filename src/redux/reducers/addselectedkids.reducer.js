import { ADD_KID_SELECTED } from "../actions/kids.action";

const initialState = "";

export default function selectedKidsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_KID_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
