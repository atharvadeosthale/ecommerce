import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AppLoader = (props) =>
  props.app.loading ? (
    <Fragment>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: "0%",
          left: 0,
          right: "0%",
          zIndex: 99,
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={require("../img/loader.gif")} />
      </div>
    </Fragment>
  ) : null;

const mapStateToProps = (state) => ({
  app: state.app,
});

export default connect(mapStateToProps)(AppLoader);
