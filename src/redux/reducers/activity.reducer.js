import {
  ADD_ACTIVITIES,
  GET_ACTIVITIES,
  DELETE_ACTIVITY,
} from "../actions/activities.action";

const initialState = [];

export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return action.payload;
    case ADD_ACTIVITIES:
      return [...state, action.payload];
    case DELETE_ACTIVITY:
      return state.filter((elem) => elem.id !== action.payload);
    default:
      return state;
  }
}
