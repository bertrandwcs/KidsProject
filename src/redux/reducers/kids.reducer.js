import { GET_KIDS, ADD_KID } from "../actions/kids.action";

const initialState = [];

export default function kidsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_KIDS:
      return action.payload;
    case ADD_KID:
      return [...state, action.payload];
    default:
      return state;
  }
}
