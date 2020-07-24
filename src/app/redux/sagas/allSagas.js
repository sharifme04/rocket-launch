import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_ALL_LAUNCHES_REQUESTED,
  FETCH_DETAILS_REQUESTED
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
  if (launches) {
    //console.log(launches);
    yield put(launchesSuccess(launches));
    const rocket = yield launches.map(e=> put(api.fetchRocketData(e)));

    if(rocket) {
      console.log(rocket);
    };
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
/* function* fetchDetailsLaunches(action) {
  const {launch, error} = yield call(
    api.fetchDetailsData,
    action.flight_number,
  );
  if (launch) {
    yield put(detailsLaunchesSuccess(launch));
  } else {
    yield put(detailsLaunchesFail(error));
  }
} */

export function* watchFetchLunches() {
  yield takeLatest(FETCH_ALL_LAUNCHES_REQUESTED, fetchLaunches);
}

export function* watchFetchHistory() {
  yield takeLatest(FETCH_ALL_HISTORY_REQUESTED, fetchHistory);
}

// export function* watchDetailsData() {
//   yield takeLatest(FETCH_DETAILS_REQUESTED, fetchDetailsLaunches);
// }
