import { all } from "redux-saga/effects";
import { watchFetchLunches, watchFetchHistory } from "./allSagas";

export default function* rootSaga() {
  yield all([watchFetchLunches(), watchFetchHistory()]);
}
