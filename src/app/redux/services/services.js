import axios from "axios";
const BASE_API = process.env.REACT_APP_BASE_API;
export const api = {
  fetchLunchData() {
    return axios
      .get(`${BASE_API}/launches`)
      .then(response => ({ launches: response.data }))
      .catch(error => ({ error }));
  },
  fetchHistoryData() {
    return axios
      .get(`${BASE_API}/history`)
      .then(response => ({ history: response.data }))
      .catch(error => ({ error }));
  },

  fetchRocketData(e){
    const id = e.rocket.rocket_id;
    return axios
    .get(`${BASE_API}/rockets/${id}`)
    .then(response =>( {rocket: response.data})) // ({ rocket: response.data })  [...e, response.data.payload_weights]
    // .then(async itemDetail => {
    // return  {rocket:itemDetail.payload_weights};
    //  // updateLaunches = [...e, itemDetail.payload_weights];
    // })
    .catch(error => ({ error }));
  }
  /*   fetchDetailsData(flight_number) {
    return axios
      .get(`${LAUNCHES_API}/${flight_number}`)
      .then(response => ({launch: response.data}))
      .catch(error => ({error}));
  }, */
};
