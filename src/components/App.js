import React from "react"
import { Route, BrowserRouter, Link, Switch } from "react-router-dom"
import SurrenderForm from "./SurrenderForm"
import TypeOfPetsContainer from "./TypeOfPetsContainer"
import ListPageContainer from "./ListPageContainer"

const App = props => {
  return (
    <div>
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
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="bottom">
          <Switch>
            <Route exact path="/pets" component={TypeOfPetsContainer} />
            <Route exact path="/guineapigs" />
            <Route exact path="/reptiles" />
            <Route exact path="/adoptions/new" component={SurrenderForm} />
          </Switch>
        </div>
      </BrowserRouter>
      <ListPageContainer />
    </div>
  )
}

export default App
