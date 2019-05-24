import React, { Component } from "react";
import { Button } from "reactstrap";
const BASE_URL = "http://192.168.2.107:8080/";

class ProductdetailsComponent extends Component {
  render() {
    return (
      <div className={"animate"}>
        <div className="row">
          <div className="col-md-6">
            <img
              src={BASE_URL + this.props.obj.thumbnail}
              alt={this.props.obj.name}
            />
          </div>

          <div className="col-md-6">{this.props.obj.price}</div>
          <Button color="success"> <i className = "fas fa-shopping-cart left"></i> Add to cart</Button>
        </div>
      </div>
    );
  }
}

export default ProductdetailsComponent;
