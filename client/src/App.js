import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div
            className="container"
            style={{ marginTop: 30, marginBottom: 30 }}
          >
            <Alert />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={SignUp} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
