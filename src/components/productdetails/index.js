import React, { Component } from "react";
import { Button, FormGroup, Container, Input } from "reactstrap";
import StripeCheckout from "react-stripe-checkout";
const BASE_URL = "http://192.168.2.118:8080/";

class ProductdetailsComponent extends Component {
  render() {
    return (
      <div>
        <Container className="auth-box">
          <h1>Product Details</h1>
          <div className={"animate"}>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={BASE_URL + this.props.obj.thumbnail}
                  alt={this.props.obj.name}
                  width="350px"
                  height="350px"
                />{" "}
              </div>

              <div className="col-md-8 cart-wrap">
                <div className="cart-content">
                  <div>
                    {" "}
                    <b> Name:</b> {this.props.obj.name}
                  </div>
                  &nbsp; &nbsp;
                  <div className="desc">
                    {" "}
                    <b>Details:</b> {this.props.obj.des}
                  </div>
                  &nbsp; &nbsp;
                  <div>
                    <b>Price: $ </b>
                    {this.props.obj.price
                      ? this.props.obj.price.toFixed(2)
                      : 0.0}{" "}
                  </div>
                  &nbsp; &nbsp;
                  <div className="FormGroup-wrap">
                    <div className="FormGroup-wrap-FormGroup">
                      <div className="qtyalign">
                        <Button
                          outline
                          color="primary"
                          onClick={this.props.decQuantity}
                          className={"cirlebtn"}
                          disabled={this.props.quantity <= 1}
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Decrease no. of quantity"
                        >
                          {" "}
                          -
                        </Button>

                        <FormGroup className="fieldsize">
                          <Input
                            className="center"
                            type="text"
                            name="quantity"
                            value={this.props.quantity}
                            readOnly
                          />
                        </FormGroup>

                        <Button
                          outline
                          color="primary"
                          onClick={this.props.incQuantity}
                          className={"cirlebtn"}
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Increase no. of quantity"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-total">
                  <span className="cart-total-label">
                    {" "}
                    <b>Total: $</b>
                  </span>
                  <span className="cart-total-value">
                    {this.props.quantity * this.props.obj.price}
                  </span>
                </div>
                <div className="button-wrap">
                  <div>
                    <StripeCheckout
                      stripeKey="pk_test_bVvaPSi39gMYihZgqd7tdFn2"
                      label="Pay with 💳"
                      amount={this.props.quantity * this.props.obj.price * 100}
                      token={this.props.handleToken}
                      // billingAddress
                      // shippingAddress
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default ProductdetailsComponent;
