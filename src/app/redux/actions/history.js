import {
  FETCH_ALL_HISTORY_REQUESTED,
  FETCH_ALL_HISTORY_SUCCESS,
  FETCH_ALL_HISTORY_FAILURE

} from '../actionType/historyType';

export const historyRequest = () => ({
  type: FETCH_ALL_HISTORY_REQUESTED,
});

export const historySuccess = history => ({
  type: FETCH_ALL_HISTORY_SUCCESS,
  history,
});

export const historyFail = error => ({
  type: FETCH_ALL_HISTORY_FAILURE,
  error,
});
