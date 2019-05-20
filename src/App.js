import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./container/login";
import ForgotPassword from "./container/login/forgotpassword";
//import { Container } from 'reactstrap';
//import Navbar1 from './navbar1';
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
