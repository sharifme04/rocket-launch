import React from 'react';
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const Table = ({orbitFiltered}) => (
  <table>
    <thead>
      <tr>
        <th>Mission Name</th>
        <th>Orbit</th>
        <th>Mission Date</th>
        <th>Payload’s Nationality</th>
        <th>Payload’s Manufacturer</th>
        <th>Payload’s Type</th>
      </tr>
    </thead>
    <tbody>
      {orbitFiltered?.map((e, i) => (
          <tr key={e.flight_number + i}>
            <td>{e.mission_name}</td>
            <td>
              <ul>
                {e.payload_weights.map((orbit, i) => (
                  <li key={uuidv4()}>{orbit.name}</li>
                ))}
              </ul>
            </td>
            <td>{dayjs(e.launch_date_utc).format("DD/MM/YYYY")}</td>
            <td>{e.rocket.second_stage.payloads[0].nationality}</td>
            <td>{e.rocket.second_stage.payloads[0].manufacturer}</td>
            <td>{e.rocket.second_stage.payloads[0].payload_type}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

Table.propTypes = {
  orbitFiltered: PropTypes.array
};
export default Table;
