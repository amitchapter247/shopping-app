import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        {/* <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">{this.props.children}</div>
        </div> */}
        <Footer />
      </div>
    );
  }
}

export default Layout;
