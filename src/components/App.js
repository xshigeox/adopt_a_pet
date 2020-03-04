import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Orbit from "./Orbit";

const App = props => {

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={NavBar} />
      </BrowserRouter>
      <Orbit />
    </div>
  );
};


export default App;
