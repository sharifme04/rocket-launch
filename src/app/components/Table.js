import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal";

const Table = ({ orbitFiltered }) => {
  const childRef = useRef();
  const [launchInformaiton, setLaunchInformaiton] = useState("");

  return (
    <div>
      <Modal ref={childRef} launchInformaiton={launchInformaiton} />
      <table className="hoverTable">
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
          {orbitFiltered?.map((e, i) => {
            return (
              <tr
                key={e.flight_number + i}
                onClick={() => {
                  childRef.current.openModal();
                  setLaunchInformaiton(e);
                }}
              >
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
Table.propTypes = {
  orbitFiltered: PropTypes.array
};
export default Table;
