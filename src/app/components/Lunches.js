import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import PropTypes from "prop-types";

import { launchesRequest } from "../redux/actions/launches";
import Table from "./Table";

const Lunches = ({ launches }) => {
  const [inputValues, setInputValues] = useState({
    searchInput: "",
    orbit: "leo"
  });
  const orbitFiltered = launches?.launches
    ?.filter(k => k.payload_weights.some(e => e.id === inputValues.orbit))
    ?.filter(
      e =>
        e.mission_name
          .toLowerCase()
          .includes(inputValues.searchInput.toLowerCase()) ||
        dayjs(e.launch_date_utc)
          .format("DD/MM/YYYY")
          .includes(inputValues.searchInput)
    );

  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div className="launch-container">
      <div className="search-fields">
        <input
          type="text"
          value={inputValues.searchInput}
          name="searchInput"
          placeholder="search by mission name or date"
          onChange={handleChange}
        />
        <label>
          Select Orbit:
          <select
            value={inputValues.orbit}
            name="orbit"
            onChange={handleChange}
          >
            <option value="leo">Low Earth Orbit</option>
            <option value="gto">Geosynchronous Transfer Orbit</option>
            <option value="mars">Mars Orbit</option>
          </select>
        </label>
      </div>
      {launches?.isLoading ? (
        <div className="loader-outer">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <Table orbitFiltered={orbitFiltered && orbitFiltered} />
        </div>
      )}
    </div>
  );
};

Lunches.propTypes = {
  launches: PropTypes.object
};

export default Lunches;
