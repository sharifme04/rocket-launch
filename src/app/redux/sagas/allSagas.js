import {
  call,
  all,
  fork,
  put,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import {
  FETCH_ALL_LAUNCHES_REQUESTED,
  FETCH_DETAILS_REQUESTED,
  UPDATE_INFORMATION_LOADING
} from "../actionType/launchType";
import { FETCH_ALL_HISTORY_REQUESTED } from "../actionType/historyType";

import {
  launchesSuccess,
  launchesFail,
  detailsLaunchesSuccess,
  detailsLaunchesFail
} from "../actions/launches";
import { historySuccess, historyFail } from "../actions/history";

import { api } from "../services/services";

function* fetchLaunches(action) {
  const { launches, error } = yield call(api.fetchLunchData, action);
  const updateLaunches = yield all(launches.map(e => api.fetchRocketData(e)));

  if (updateLaunches) {
    yield put(launchesSuccess(updateLaunches));
  } else {
    yield put(launchesFail(error));
  }
}

function* fetchHistory(action) {
  const { history, error } = yield call(api.fetchHistoryData, action);
  if (history) {
    yield put(historySuccess(history));
  } else {
    yield put(historyFail(history));
  }
}

function* updateLaunchInfo(action) {
  const { information, error } = yield call(api.updateInformation, action);
  if (information) yield put(updateInformationSuccess(information));
  else yield put(updateInformationFail(error));
}

export function* watchFetchLunches() {
  yield takeLatest(FETCH_ALL_LAUNCHES_REQUESTED, fetchLaunches);
}

export function* watchFetchHistory() {
  yield takeLatest(FETCH_ALL_HISTORY_REQUESTED, fetchHistory);
}

export function* watchLaunchInfo() {
  yield takeLatest(UPDATE_INFORMATION_LOADING, updateLaunchInfo);
}
