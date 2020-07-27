import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
import Histories from "./app/components/Histories";
import Home from "./app/components/Home";
import Lunches from "./app/components/Lunches";

const App = () => {
  const launches = useSelector(state => state.launches);
  const history = useSelector(state => state.history);

  return (
    <div className="flex-container">
      <h1>HQ app</h1>
      <hr/>
      <div className="container-fluid">
        <Route exact path="/" render={() => <Home />} />
        <Route
          path="/lunches"
          render={() => <Lunches launches={launches} />}
        />
        <Route
          path="/histories"
          render={() => <Histories history={history} />}
        />
      </div>
    </div>
  );
};

export default App;
