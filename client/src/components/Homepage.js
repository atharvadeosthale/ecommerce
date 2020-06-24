import React, { Fragment } from "react";
import { connect } from "react-redux";

export const Homepage = () => {
  return (
    <Fragment>
      <div className="jumbotron">
        <div className="container">
          <h1>The Perfect Marketplace</h1>
          <p className="lead">
            Welcome to the Marketplace. Here you are going to find the most
            trending products and also the most featured ones. <br />
            Happy Shopping!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
