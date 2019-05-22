import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./container/login";
import ForgotPassword from "./container/login/forgotpassword";
import ResetPassword from "./container/login/resetpassword";
import Register from "./container/signup";
import Home from "./components/home/"
import Card from "./components/home/card"
import Profile from "./container/profile/profile";
import ProductList from "./container/productlist/index"
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset/:token1" component={ResetPassword} />
            <Route path="/signup" component={Register} />
            <Route path="/card" component={Card} />
            <Route path="/profile" component={Profile} />
            <Route path="/product-list" component={ProductList} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
