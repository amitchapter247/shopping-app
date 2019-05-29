import React, { Component } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import ProductComponent from "../../components/productlist/index";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Sidebar from "../Layout/Sidebar";
import { MDBCard, MDBCol } from "mdbreact";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      name: "",
      order: ""
    };
  }

  componentDidMount = async () => {
    this.getData();
  };

  getData = async () => {
    const res = await axios.post("http://192.168.2.118:8080/getProduct");
    const dataresult = res.data.result;
    this.setState({ product: dataresult });
    if (!dataresult) {
      console.log("error");
    }
  }
  onSubmit = async e => {
    e.preventDefault();
    this.setState({ product: "" });
    const { name } = this.state;
    const data = { name };

    const response = await axios.post(
      "http://192.168.2.118:8080/searchProduct",
      data
    );
    console.log(response);
    if (response) {
      this.setState({ name: "" });
      const result = response.data.result;
      this.setState({ product: result });
    }
  };
  onSearch = async e => {
    e.preventDefault();
    this.setState({ product: "" });
    const { order } = this.state;
    const data = { order };
    const response = await axios.post(
      "http://192.168.2.118:8080/searchProductByPrice",
      data
    );
    if (response) {
      const result = response.data.result;
      this.setState({ product: result });
    }
  };

  onInputChange = e => {
    const { target } = e;
    const { value, name } = target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { product } = this.state;
    return (
      <>
        <div>
          <Header />
          {this.props.children}
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            {/* <div className="col-md-9"> */}
            <div class="row">
              <MDBCol lg="3" md="4" className="mblg-4 mb-3">
                <Container className="mb-lg-4 mb-4">
                  <MDBCard id="products">
                    {product && product.length
                      ? product.map(product => {
                          return (
                            <ProductComponent obj={product} key={product._id} />
                          );
                        })
                      : null}
                  </MDBCard>
                </Container>
              </MDBCol>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default ProductList;
