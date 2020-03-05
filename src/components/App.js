import React from "react"
<<<<<<< HEAD
import { Route, BrowserRouter } from "react-router-dom"
import NavBar from "./NavBar"
import Orbit from "./Orbit"

const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={NavBar} />
      </BrowserRouter>
      <Orbit />
    </div>
  )
}

=======
import { Route, BrowserRouter, Link, Switch } from "react-router-dom"
import SurrenderForm from "./SurrenderForm"
import TypeOfPetsContainer from "./TypeOfPetsContainer"
import LoginPage from "./LoginPage"
import ListPageContainer from "./ListPageContainer"
import ShowPage from "./ShowPage"

const App = props => {
  return (
    <BrowserRouter>
      <div className="top-links">
        <nav className="top-bar topbar-responsive">
          <div className="top-bar-title">
            <Link to="/pets" id="topbar-site-title">
              <strong>Pet Adoption Site</strong>
            </Link>
          </div>
          <div id="topbar-responsive" className="topbar-responsive-links">
            <div className="top-bar-right">
              <ul className="menu simple vertical medium-horizontal">
                <li>
                  <Link to="/pets">Home</Link>
                </li>
                <li>
                  <Link to="/guineapigs">Guinea Pigs</Link>
                </li>
                <li>
                  <Link to="/reptiles">Reptiles</Link>
                </li>
                <li>
                  <Link to="/adoptions/new">Put up for Adoption</Link>
                </li>
                <li className="admin-button">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="bottom">
        <Switch>
          <Route exact path="/pets" component={TypeOfPetsContainer} />
          <Route exact path="/guineapigs" key={"gp"}>
            <ListPageContainer
              petType={"guinea pig"}
              petTypeName={"Guinea Pigs"}
            />
          </Route>
          <Route exact path="/reptiles" key={"lz"}>
            <ListPageContainer petType={"reptile"} petTypeName={"Reptiles"} />
          </Route>
          <Route exact path="/adoptions/new" component={SurrenderForm} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/pets/:id" component={ShowPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

>>>>>>> 1e4b657b2bcf92867acb470a00f31ea60c73c3b3
export default App
