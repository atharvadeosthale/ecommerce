import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAlert } from "../actions/alert";
import { login } from "../actions/auth";
import axios from "axios";

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    loading: false,
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, loading: true });
    await props.login(formData.email, formData.password);
    setFormData({ ...formData, loading: false });
  };

  return (
    <Fragment>
      {props.auth.isAuth && <Redirect to="/" />}
      <h1>Login to E-Commerce</h1>
      <p className="lead">Please enter required credentials to log in.</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your E-mail"
            className="form-control"
            value={formData.email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            className="form-control"
            value={formData.password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          disabled={formData.loading}
        >
          {formData.loading ? "Loading" : "Login"}
        </button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setAlert, login })(Login);
