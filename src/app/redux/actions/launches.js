import {
  FETCH_ALL_LAUNCHES_REQUESTED,
  FETCH_ALL_LAUNCHES_SUCCESS,
  FETCH_ALL_LAUNCHES_FAILURE,
  FETCH_DETAILS_REQUESTED,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE,
  UPDATE_INFORMATION_LOADING,
  UPDATE_INFORMATION_SUCCESS,
  UPDATE_INFORMATION_FAILURE
} from "../actionType/launchType";

export const launchesRequest = () => ({
  type: FETCH_ALL_LAUNCHES_REQUESTED
});

export const launchesSuccess = launches => ({
  type: FETCH_ALL_LAUNCHES_SUCCESS,
  launches
});

export const launchesFail = error => ({
  type: FETCH_ALL_LAUNCHES_FAILURE,
  error
});

export const detailsLaunchesRequest = flight_number => ({
  type: FETCH_DETAILS_REQUESTED,
  flight_number
});

export const detailsLaunchesSuccess = launch => ({
  type: FETCH_DETAILS_SUCCESS,
  launch
});

export const detailsLaunchesFail = error => ({
  type: FETCH_DETAILS_FAILURE,
  error
});

export const updateInformationLoading = (id, inputValues) => ({
  type: UPDATE_INFORMATION_LOADING,
  id,
  inputValues
});

export const updateInformationSuccess = inputValues => ({
  type: UPDATE_INFORMATION_SUCCESS,
  inputValues
});

export const updateInformationFail = error => ({
  type: UPDATE_INFORMATION_FAILURE,
  error
});
