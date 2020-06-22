import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { setAlert } from "../actions/alert";
import { signUp } from "../actions/auth";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
    loading: false,
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, loading: true });
    if (formData.password !== formData.cpassword) {
      setFormData({ ...formData, password: "", cpassword: "", loading: false });
      return props.setAlert("Passwords do not match", "danger");
    }
    await props.signUp(
      formData.name,
      formData.email,
      formData.mobile,
      formData.password
    );
    setFormData({ ...formData, loading: false });
  };

  return (
    <Fragment>
      {props.auth.isAuth && <Redirect to="/" />}
      <div className="jumbotron">
        <div className="container">
          <h1>Register Now</h1>
          <p className="lead">
            Register at E-Commerce so that you could buy and sell goods at your
            own rate online. Just fill in the form and we will handle the rest!
          </p>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Enter your Full Name"
            value={formData.name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter your Email Address"
            value={formData.email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="form-control"
            placeholder="Enter your Mobile Number"
            value={formData.mobile}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            className="form-control"
            placeholder="Confirm your Password"
            value={formData.cpassword}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          disabled={formData.loading}
        >
          {formData.loading ? "Please Wait" : "Register"}
        </button>
      </form>
    </Fragment>
  );
};

SignUp.propTypes = {
  auth: PropTypes.object.isRequired,
  signUp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setAlert, signUp })(SignUp);
