import React, { Component } from "react";
import axios from "axios";
import ProductComponent from "../../components/productlist/index";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Sidebar from "../Layout/Sidebar";
import { Pagination, Container } from "react-bootstrap";
import { Card } from "reactstrap";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      name: "",
      order: "",
      category: "",
      value: "",
      sort: "",
      currentPage: 1,
      totalPageRec: 0,
      pageLimit: "3",
      skip: 0
    };
  }
  componentDidMount = async () => {
    this.getData();
  };
  getData = async () => {
    const { currentPage, pageLimit } = this.state;
    const skip = (currentPage - 1) * pageLimit;
    const limit = pageLimit;
    const rese = await axios.get("http://192.168.2.118:8080/productCount");
    var count = rese.data.result;
    if (count % pageLimit != 0) {
      const a = count % pageLimit;
      const b = pageLimit - a;
      count = count + b;
    }
    this.setState({ totalPageRec: count})
    console.log("Product -API", rese);
    const obj = { skip, limit };
    const res = await axios.post("http://192.168.2.118:8080/getProduct", obj);
    console.log("Product " ,res);
    // var result;
    // var n = 0;
    // for (n = 0; n < res.data.response.length; n++) {
      const result = res.data.result;
      console.log(result);
      this.setState({ product: result, skip });
    
    if (!result) {
      console.log("error");
    }
  };
  onSearch = async e => {
    e.preventDefault();
    this.setState({ product: "" });
    const { sort } = this.state;
    const data = { sort };
    const response = await axios.post(
      "http://192.168.2.118:8080/searchProductByPrice",
      data
    );
    if (response) {
      this.props.history.push("/product-list");
      const result = response.data.result;
      this.setState({ product: result });
    }
  };
  onsearchCatagory = async e => {
    e.preventDefault();
    this.setState({ product: "" });
    const { category } = this.state;
    const data = { category };
    const response = await axios.post(
      "http://192.168.2.118:8080/searchProductByCat",
      data
    );

    if (response) {
      const result = response.data.result;
      this.setState({ product: result });
    }
  };
  onSubmit = async e => {
    e.preventDefault();
    this.setState({ product: "" });
    const { name, sort, category } = this.state;
    const data = { name, sort, category };
    const response = await axios.post(
      "http://192.168.2.118:8080/searchProductByPrice1",
      data
    );
    console.log(response);
    
    if (response) {
      this.setState({ name: "" });
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

  handlePageChange = (page, e) => {
    this.setState({
      currentPage: page
    });
  };
  getPaginator = () => {
    const { currentPage, totalPageRec, pageLimit ,skip} = this.state;
    let active = currentPage;
    let items = [];
    let totalPages = Math.floor(totalPageRec / pageLimit);
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => this.onPageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    const paginationBasic = (
      <div>
        <Pagination size="sm">{items}</Pagination>
      </div>
    );

    return paginationBasic;
  };

  onPageChange = async pageNumber => {
    console.log("Page number :-", pageNumber);
    this.setState({ currentPage: pageNumber }, this.getData);
    // console.log("pagination data: ", res);
  };
  render() {
    const { product, name, category } = this.state;
    return (
      <>
        <div>
          <Header
            onSubmit={this.onSubmit}
            onChange={this.onInputChange}
            name={name}
            onClick={this.getData}
          />

          {this.props.children}
          <div className="row">
            <div className="col-md-1"> 
              <Sidebar
                onSubmit={this.onSubmit}
                onChange={this.onInputChange}
                category={category._id}
                sort={name}
              />
            </div>
            <div className="col-md-11">
            <Container>
                            <ul className="product-list">
                {product && product.length
                  ? product.map(product => {
                      return (
                        <li className="product-list_item">
                          <ProductComponent obj={product} key={product._id} />
                        </li>
                      );
                    })
                  : null}
              </ul>
                            </Container>
              <span>

              {this.getPaginator()}
              </span>
            </div>
          </div>
        </div>
           
        <Footer />
      </>
    );
  }
}
export default ProductList;
