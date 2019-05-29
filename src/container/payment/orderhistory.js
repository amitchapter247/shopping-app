import React, { Component, Fragment } from "react";
import axios from "axios";
import { Table, Button } from "reactstrap";
import OrderComponent from "../../components/payment/orderhistory";

import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdbreact";
import { toast } from "react-toastify";
class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [], Cid: localStorage.getItem("Cid") };
  }
  componentDidMount = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/login");
    }
    this.getData();
  };
  // getData = async () => {
  //   const { Cid } = this.state;
  //   const data = { Cid };
  //   const res = await axios.post("http://192.168.2.243:8080/showorder", data);
  //   console.log(res.data.result);
  //   console.log("result");
  //   const result = res.data.result;
  //   this.setState({ product: result });
  //   console.log(result);
  //   if (!result) {
  //     console.log("error");
  //   }
  // };

  render() {
    const { product } = this.state;
    return (
      <>
        {product.length ? (
          <>
            <h2>Order List</h2>

            <Table>
              <thead>
                <tr class="table-active" textAlign="center">
                  <th align="center">S.No.</th>
                  <th>Product Image</th>
                  <th align="center">Product Title</th>
                  <th>Transaction Id</th>
                  <th>Product Price</th>
                  <th>Status</th>
                  {/* <th colSpan="2">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {product && product.length
                  ? product.map(product => {
                      return (
                        <OrderComponent
                          obj={product}
                          key={product._id}
                          onDelete={this.onDelete}
                        />
                      );
                    })
                  : null}
              </tbody>
            </Table>
          </>
        ) : (
          <>
            <h2 style={{ marginTop: "5px", marginBottom: "5px" }}>
              {" "}
              Order List
            </h2>

            <Table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Product Image</th>
                  <th>Product Title</th>
                  <th>Transaction Id</th>
                  <th>Product Price</th>
                  <th>Status</th>
                  {/* <th colSpan="2">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {product && product.length
                  ? product.map(product => {
                      return <OrderComponent obj={product} key={product._id} />;
                    })
                  : null}
              </tbody>
            </Table>
            <div style={{ margin: "0 auto", textAlign: "center" }}>
              <MDBIcon icon="ban" className={"icons"} />
              <p align="center">
                {" "}
                Currrently No orders are available in the Order list
              </p>
              <Button
                variant={"primary"}
                value={"Go to home"}
                onClick={() => {
                  this.props.history.push("product-list");
                }}
              >
                <i className="fa fa-plus left">Start Shopping </i>{" "}
              </Button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default OrderList;
