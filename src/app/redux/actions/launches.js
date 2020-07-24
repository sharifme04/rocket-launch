import {
  FETCH_ALL_LAUNCHES_REQUESTED,
  FETCH_ALL_LAUNCHES_SUCCESS,
  FETCH_ALL_LAUNCHES_FAILURE,
  FETCH_DETAILS_REQUESTED,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE
} from '../actionType/launchType';

export const launchesRequest = () => ({
  type: FETCH_ALL_LAUNCHES_REQUESTED,
});

export const launchesSuccess = launches => ({
  type: FETCH_ALL_LAUNCHES_SUCCESS,
  launches,
});

export const launchesFail = error => ({
  type: FETCH_ALL_LAUNCHES_FAILURE,
  error,
});

export const detailsLaunchesRequest = flight_number => ({
  type: FETCH_DETAILS_REQUESTED,
  flight_number,
});

export const detailsLaunchesSuccess = launch => ({
  type: FETCH_DETAILS_SUCCESS,
  launch,
});

export const detailsLaunchesFail = error => ({
  type: FETCH_DETAILS_FAILURE,
  error,
});
