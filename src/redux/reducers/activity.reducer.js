/* import {
  ADD_ACTIVITIES,
  DELETE_ACTIVITIES,
  GET_ACTIVITIES,
} from "../actions/activities.action";

const initialState = {};

export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return action.payload;
    case ADD_ACTIVITIES:
      return [...state, action.payload];

    case DELETE_ACTIVITIES:
      return [state, action.payload];
    default:
      return state;
  }
} */
