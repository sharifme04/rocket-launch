import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { launchesRequest } from "../redux/actions/launches";
import { historyRequest } from "../redux/actions/history";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="button-view">
      <Link to="/histories">
        <button
          className=" home-button history-button"
          onClick={() => dispatch(historyRequest())}
        >
          Hisotries
        </button>
      </Link>
      <Link to="/lunches">
        {" "}
        <button
          className="home-button launch-button"
          onClick={() => dispatch(launchesRequest())}
        >
          Lunches
        </button>{" "}
      </Link>
    </div>
  );
};

// Lunches.propTypes = {

// }

export default Home;
