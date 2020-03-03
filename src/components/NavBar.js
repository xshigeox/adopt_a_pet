import React from "react"
import { Link, Switch, Route, BrowserRouter } from "react-router-dom"
import SurrenderForm from "./SurrenderForm"

const NavBar = props => {
  return (
    <BrowserRouter>
      <nav className="top-bar topbar-responsive">
        <div className="top-bar-title">
          <Link to="/" id="topbar-site-title">
            <strong>Pet Adoption Site</strong>
          </Link>
        </div>
        <div id="topbar-responsive" className="topbar-responsive-links">
          <div className="top-bar-right">
            <ul className="menu simple vertical medium-horizontal">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/guinea_pigs">Guinea Pigs</Link>
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

      <div>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/guinea_pigs" />
          <Route exact path="/reptiles" />
          <Route exact path="/adoptions/new" component={SurrenderForm} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default NavBar
