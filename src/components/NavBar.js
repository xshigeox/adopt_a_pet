import React, { Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";

const NavBar = props => {
  return (
    <Fragment>
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
                <Link to="/" classNameName="">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/guinea_pigs" className="">
                  Guinea Pigs
                </Link>
              </li>
              <li>
                <Link to="/reptiles" className="">
                  Reptiles
                </Link>
              </li>
              <li>
                <Link to="/adoptions/new" className="">
                  Put up for Adoption
                </Link>
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
          <Route exact path="/adoptions/new" />
        </Switch>
      </div>
    </Fragment>
  );
};

export default NavBar;
