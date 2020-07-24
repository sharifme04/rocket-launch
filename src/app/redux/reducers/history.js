import {
  FETCH_ALL_HISTORY_REQUESTED,
  FETCH_ALL_HISTORY_SUCCESS,
  FETCH_ALL_HISTORY_FAILURE
} from "../actionType/historyType";

const initialState = {
  history: null,
  error: null
};

export default function history(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_HISTORY_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ALL_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.history,
        isLoading: false
      };
    case FETCH_ALL_HISTORY_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
