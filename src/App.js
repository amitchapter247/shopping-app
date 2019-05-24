import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./container/login";
import ForgotPassword from "./container/login/forgotpassword";
import ResetPassword from "./container/login/resetpassword";
import Register from "./container/signup";
import Footer from "./components/home/footer";
import Contactus from "./components/home/contactus";
import Terms from "./components/home/terms-and-condition";
import Blog from "./components/home/blog";
import About from "./components/home/about";
import Privacy from "./components/home/privacy";
import CardContainer from "./container/home/card";
import Sortbyprice from "./container/sort";
import Layout from "./container/Layout";
import Productdetails from "./container/productdetails";

class App extends Component {
  render() {
    const DefaultLayout = ({ component: Component, ...rest }) => {
      console.log("djfgfgudfyds");
      return (
        <Route
          {...rest}
          render={props => (
            <>
              <Layout {...props}>
                <Component {...props} />
              </Layout>
            </>
          )}
        />
      );
    };
    return (
      <Router>
        <>
          <Switch>
            <DefaultLayout exact path="/" component={CardContainer} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset/:token1" component={ResetPassword} />
            <Route path="/signup" component={Register} />
            <Route path="/footer" component={Footer} />
            <Route path="/contactus" component={Contactus} />
            <Route path="/terms-and-condition" component={Terms} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/card" component={CardContainer} />
            <Route path="/demo" component={Sortbyprice} />
            <Route path="/product-details" component={Productdetails} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
