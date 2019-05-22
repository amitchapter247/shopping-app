import Axios from "axios";
import React, { Component } from "react";

import MultipleComponent from "../../components/home/card";

class MultipleItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      isLoading: false,
      errors: {},
    };
  }
  componentDidMount = async () => {
    // const data= {name , price, thumbnail};
   const response=  await Axios.get('http://192.168.2.112:8080/getItem/:id')
    const result = response.data.result;
    this.setState({ product: result });
    console.log(result);
    if (!result) {
      console.log("error");
    }
  };

  // autoLogin = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     this.props.history.push("/product-list");
  //   }
  // };
  render() {
    const { product } = this.state;
    return (
      <MultipleComponent
      products={products}
      />
    );
  }
}

export default MultipleItems;
