import React, { Component } from "react";
import axios from "axios";
import ProductdetailsComponent from "../../components/productdetails";

class Productdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      data: ""
    };
  }
  componentDidMount = async () => {
    const { data } = this.state;
    const response = await axios.get("http://192.168.2.107:8080/getProduct/");
    console.log("resssss", response);
    const data1 = response.data.result[1]._id;

    console.log("dataaa", data1);
    // this.setState({ data: data1 });
    const obj = { data1 };

    const res = await axios.post("http://192.168.2.107:8080/getItem", obj);
    const result = res.data.result;
    this.setState({ product: result });
    if (!result) {
      console.log("error");
    }
  };

  render() {
    const { product } = this.state;
    return (
      <>
        <ProductdetailsComponent obj={product} key={product._id} />;
      </>
    );
  }
}
export default Productdetails;
