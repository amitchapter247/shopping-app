import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./container/login";
import ForgotPassword from "./container/login/forgotpassword";
import ResetPassword from "./container/login/resetpassword";

import Register from "./container/signup";
//import { Container } from 'reactstrap';
//import Navbar1 from './navbar1';
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset/:token1" component={ResetPassword} />
            <Route path="/signup" component={Register} />
          </Switch>
        </>
      </Router>
    );
  }
}
export default App;
