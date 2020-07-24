import {
  FETCH_ALL_LAUNCHES_REQUESTED,
  FETCH_ALL_LAUNCHES_SUCCESS,
  FETCH_ALL_LAUNCHES_FAILURE,
  FETCH_DETAILS_REQUESTED,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE
} from "../actionType/launchType";

const initialState = {
  launches: null,
  error: null
};

export default function launches(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_LAUNCHES_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ALL_LAUNCHES_SUCCESS:
      return {
        ...state,
        launches: action.launches,
        isLoading: false
      };
    case FETCH_ALL_LAUNCHES_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case FETCH_DETAILS_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        launch: action.launch,
        isLoading: false
      };
    case FETCH_DETAILS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
