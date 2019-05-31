import React, { Component } from "react";
import axios from "axios";
import ProductdetailsComponent from "../../components/productdetails";
import {
  CardHeader,
  CardFooter,
  Row,
  Col,
  Collapse,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SimilarSlider from "../../container/productdetails/similarproductsslider";

class Productdetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      data: "",
      quantity: 1,
      cId: localStorage.getItem("cId")
    };
  }

  componentDidMount = async () => {
    await this.fetchProduct();
  };

  fetchProduct = async () => {
    try {
      const res = await axios.post(
        "http://192.168.2.118:8080/getItem/" + this.props.match.params.id
      );
      console.log(res);
      this.setState({ product: res.data.result });
    } catch (error) {
      console.log("product fetch err: ", error);
    }
  };

  add = e => {
    e.preventDefault();
    if (this.state.quantity < this.state.product["quantity"]) {
      this.setState({
        quantity: this.state.quantity + 1
      });
    } else {
      toast.isActive("Stock limit reach");
    }
    console.log("Stock limit reach");
  };

  subtract = e => {
    e.preventDefault();
    this.setState({
      quantity: this.state.quantity - 1
    });
    console.log("No product added");
  };

  onClick = e => {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/login");
    }
  };

  handleToken = async (token, amount, productid, quantity) => {
    console.log(token);
    const { cId } = this.state;
    const data = { cId };
    const resp = await axios.post("http://192.168.2.118:8080/payment", {
      data,
      token,
      amount,
      productid,
      quantity
    });

    const { success } = resp.data;
    console.log("Response:", resp.data);
    if (success) {
      toast.success.isActive("Payment has been successfully done! ");
      this.props.history.push("/success");
    } else {
      toast.danger.isActive("Something went wrong");
      this.props.history.push("/failure");
    }
  };

  render() {
    const { product, quantity } = this.state;

    return (
      <>
        <CardHeader className="head">
          {" "}
          <div className="navbar">
            <Navbar light expand="md" link to="/">
              <NavLink to={"/product-list"} className="a">
                {" "}
                <i className=" fa fa-arrow-circle-left" /> Back
              </NavLink>
              &nbsp; &nbsp;
              <div className="a">
                <NavbarBrand link to="/">
                  Fashion Junction
                </NavbarBrand>{" "}
              </div>{" "}
              <NavbarToggler onClick={this.toggle} />
              <Nav className="ml-auto" navbar>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Link to={"/login"} className="a">
                    {" "}
                    <b>Login </b>{" "}
                  </Link>
                  &nbsp; &nbsp;
                  <NavLink to={"/signup"} className="a">
                    {" "}
                    <b> Signup</b>{" "}
                  </NavLink>
                </Collapse>
              </Nav>
            </Navbar>
          </div>
        </CardHeader>

        <ProductdetailsComponent
          obj={product}
          key={product._id}
          quantity={quantity}
          incQuantity={this.add}
          decQuantity={this.subtract}
          handleToken={this.handleToken}
          onClick={this.onClick}
        />

        <SimilarSlider />

        <CardFooter
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <Row>
            <Col>
              <p className="a">Static page</p>
              <li className="li">
                <Link className="a" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="li">
                <Link className="a" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="li">
                <Link className="a" to={"/signup"}>
                  Signup
                </Link>
              </li>
              <li className="li">
                <Link className="a" to={"/product-list"}>
                  Product List
                </Link>
              </li>
            </Col>
            <Col>
              <p className="a">Connect with us at social media </p>
              <li className="li">
                <a className="a" href="https://www.facebook.com/">
                  <i className="fab fa-facebook-square left" />
                  Facebook{" "}
                </a>
              </li>
              <li className="li">
                <a className="a" href="https://www.twitter.com/">
                  <i className="fab fa-twitter-square left" />
                  Twitter{" "}
                </a>
              </li>
              <li className="li">
                <a className="a" href="https://in.linkedin.com//">
                  <i className="fab fa-linkedin-in left" />
                  linkedin{" "}
                </a>
              </li>
            </Col>

            <Col>
              <p className="a"> Legal</p>
              <li className="li">
                <Link className="a" to="terms-and-condition">
                  Terms
                </Link>
              </li>
              <li className="li">
                <Link className="a" to="privacy">
                  Privacy
                </Link>
              </li>
            </Col>
            <Col style={{ paddingRight: "360px" }}>
              <p className="a">Newsletter</p>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-envelope" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="email"
                  name="email"
                  placeholder="email"
                  autoComplete="username"
                  onChange={this.props.onInputChange}
                />
              </InputGroup>
              <Button type="submit" color="success">
                {" "}
                Send{" "}
              </Button>
            </Col>
          </Row>
          &nbsp; &nbsp;
          <p className="copyright">
            &copy; {new Date().getFullYear()} Copyright
          </p>
        </CardFooter>
      </>
    );
  }
}
export default Productdetails;

