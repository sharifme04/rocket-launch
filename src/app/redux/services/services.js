import axios from "axios";
const BASE_API = process.env.REACT_APP_BASE_API;
export const api = {
  fetchLunchData() {
    let items = [];
    return axios
      .get(`${BASE_API}/launches`)
      .then(response => ({launches:response.data}))
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
    .then(response =>({...e,payload_weights: response.data.payload_weights}))
    .catch(error => ({ error }));
  },

  updateInformation(action) {
    console.log(action);
    return axios
      .post(`${BASE_API}/${action.id}`,action.inputValues)  //fake api
      .then(response => ({ information: response.data }))
      .catch(error => ({ error }));
  },
};
