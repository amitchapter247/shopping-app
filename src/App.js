import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import Layout from "./container/Layout";
import Productdetails from "./container/productdetails";
import ProductList from "./container/productlist";
import SimilarSlider from "./container/productdetails/similarproductsslider";
import Checkout from "./container/checkout";
import "./App.css";
import Stripe from "./container/checkout/stripepayment";

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
            <Route path="/product-details/:id" component={Productdetails} />
            <Route path="/product-list" component={ProductList} />
            <Route path="/similarproducts" component={SimilarSlider} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/stripe/:_id" component={Stripe} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
