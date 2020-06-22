import React, { Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  const logoutMe = () => {
    props.logout();
  };

  console.log(props.auth);

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-primary navbar-dark">
        <Link className="navbar-brand" to="/">
          ECommerce
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {props.auth.isAuth === true ? (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" onClick={logoutMe}>
                    Logout
                  </Link>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Sign Up
                  </Link>
                </li>
              </Fragment>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
