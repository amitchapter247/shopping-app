import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import { Input , FormGroup, Form  } from "reactstrap";

class Sortbyprice extends Component {
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
    const response = await axios.get("http://192.168.2.107:8080/getProduct");
    const result = response.data.result1;
    this.setState({ product: result });
    if (!result) {
      console.log("error");
    }
  };
  onSubmit = async e => {
    e.preventDefault();
    this.setState({ product: "" });
    const { name } = this.state;
    const data = { name };

    const response = await axios.post(
      "http://192.168.2.107:8080/searchProduct",
      data
    );
    if (response) {
      this.setState({ name: "" });
      const result = response.data.result1;
      this.setState({ product: result });
    }
  };
  onSearch = async e => {
    e.preventDefault();
    this.setState({ product: "" });
    const { order } = this.state;
    const data = { order };
    const response = await axios.post(
      "http://192.168.2.107:8080/searchProductByPrice",
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
    const { product, name, order } = this.state;
    return (
      // <ProductComponent
      //   product={product}
      //   name={name}
      //   order={order}
      //   onSearch={this.onSearch}
      //   onInputChange={this.onInputChange}
      //   onSubmit={this.onSubmit}
      // />

  <Form > 
     <FormGroup row>
              <Input type="search" name="search" placeholder="Search" onChange={this.onSearch} row />
            </FormGroup>
        {/* <FormGroup >
          <Input type= ""
          </FormGroup>     */}
  </Form>
      
    );
  }
}
export default Sortbyprice;
