import axios from "axios";
const BASE_API = process.env.REACT_APP_BASE_API;
export const api = {
  fetchLunchData() {
    let items = [];
    return axios
      .get(`${BASE_API}/launches`)
      .then(response => ({launches:response.data}))
//       .then(async data=>{
//          return {launches: data.map(async e => {
//         return  await axios
//             .get(`${BASE_API}/rockets/${e.rocket.rocket_id}`)
//             .then(response=> response.data)
//             .then(async response =>{
//               items = [...items, {...e,payload_weights: response.payload_weights}];
//                 return items;
//             })
//         })
// }
//       })
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
   // console.log(id);
    return axios
    .get(`${BASE_API}/rockets/${id}`)
    .then(response =>({...e,payload_weights: response.data.payload_weights})) // ({ rocket: response.data })  [...e, response.data.payload_weights]
//.then(response => ({ rocket: response }))
    .catch(error => ({ error }));

        // .then(async itemDetail => {
    // return  {rocket:itemDetail.payload_weights};
    //  // updateLaunches = [...e, itemDetail.payload_weights];
    // })
  }
  /*   fetchDetailsData(flight_number) {
    return axios
      .get(`${LAUNCHES_API}/${flight_number}`)
      .then(response => ({launch: response.data}))
      .catch(error => ({error}));
  }, */
};
