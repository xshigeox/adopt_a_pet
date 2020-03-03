import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Orbit from "./Orbit";

const App = props => {
<<<<<<< HEAD
  return <NavBar />
}
=======
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={NavBar} />
      </BrowserRouter>
      <Orbit />
    </div>
  );
};
>>>>>>> 54e48e1e85eb24e249e06240c27a83c5b561d0a2

export default App;
