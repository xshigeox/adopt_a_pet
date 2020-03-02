import React from "react"
import { Link, Switch, Route } from "react-router-dom"

const NavBar = props => {
  return (
    <>
      <div className="top-bar top-links" id="nav">
        <nav>
          <Link to="/" className="nav-link">
            <i class="fas fa-home"></i>
          </Link>
          <i class="fas fa-grip-lines-vertical"></i>
          <Link to="/guinea_pigs" className="nav-link">
            Guinea Pigs
          </Link>
          <i class="fas fa-grip-lines-vertical"></i>
          <Link to="/reptiles" className="nav-link">
            Reptiles
          </Link>
          <i class="fas fa-grip-lines-vertical"></i>
          <Link to="/adoptions/new" className="nav-link">
            Put up for Adoption
          </Link>
        </nav>
      </div>

      <div>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/guinea_pigs" />
          <Route exact path="/reptiles" />
          <Route exact path="/adoptions/new" />
        </Switch>
      </div>
    </>
  )
}

export default NavBar
