import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from "mdbreact";
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Sidebar from "../.../container/Layout/Sidebar"

const BASE_URL = "http://192.168.2.118:8080/";

class ProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { obj } = this.props;

    return (
      <>
        <section>
          <MDBCard cascade narrow ecommerce id="products">
          <Link to={"product-details/" + obj._id} >           
           <MDBCardImage
              cascade
              src={BASE_URL + obj.thumbnail}
              top
              alt={obj.name}
              overlay="white-slight"
            />
            </Link>

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle>
                <strong>
                  <Link to={"product-details/" + obj._id}>{obj.name}</Link>
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                <span className="float-left font-weight-bold">
                  <strong> ${obj.price}</strong>
                </span>
                <MDBBtn>
                  <span class="float-right font-weight-bold">
                    <Link
                      to="product-details"
                      class="active"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to cart"
                    >
                      <i class="fas fa-shopping-cart black-text ml-3" />
                    </Link>
                  </span>
                </MDBBtn>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </section>
      </>
    );
  }
}

export default ProductComponent;
