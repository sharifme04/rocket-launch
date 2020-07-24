import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { launchesRequest } from "../redux/actions/launches";

const Lunches = ({ launches }) => {
  const [value, setValue] = useState("");
  //const dispatch = useDispatch();
  /*   const launches = useSelector(state => state.launches);

  useEffect(() => {
    dispatch(launchesRequest());
  }, []); */

  const handleChange = event => {
    setValue(event.target.value);
  };
  console.log(launches);
  return (
    <div>
      <div>
        <input type="text" value={value} placeholder='search by mission name or date' onChange={handleChange} />
      </div>
      {launches?.isLoading ? (
        <div className="loader"></div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Mission Name</th>
                <th>Mission Date</th>
                <th>Payload’s Nationality</th>
                <th>Payload’s Manufacturer</th>
                <th>Payload’s Type</th>
              </tr>
            </thead>
            <tbody>
              {launches?.launches
                ?.filter(
                  e =>
                    e.mission_name
                      .toLowerCase()
                      .includes(value.toLowerCase()) ||
                    dayjs(e.launch_date_utc)
                      .format("DD/MM/YYYY")
                      .includes(value)
                )
                .map((e, i) => (
                  <tr key={e.flight_number + i}>
                    <td>{e.mission_name}</td>
                    <td>{dayjs(e.launch_date_utc).format("DD/MM/YYYY")}</td>
                    <td>{e.rocket.second_stage.payloads[0].nationality}</td>
                    <td>{e.rocket.second_stage.payloads[0].manufacturer}</td>
                    <td>{e.rocket.second_stage.payloads[0].payload_type}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

 Lunches.propTypes = {
    launches: PropTypes.object
 }

export default Lunches;
