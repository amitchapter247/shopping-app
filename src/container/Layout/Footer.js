import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  CardFooter,
  Row,
  Col,
  InputGroup,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      intervalId: 0
    };
  }
  onSubmit = async e => {
    e.preventDefault();
    try {
      const { email } = this.state;
      const data = { email };
      const result = await axios.post(
        "http://192.168.2.118:8080/addEmail",
        data
      );
      if (result) {
        this.setState({ email: "" });
        toast.success.isActive(
          "You are Successfully Registered your email for daily updates"
        );
      }
    } catch (error) {
      console.log(error);
      toast.error.isActive(
        `${(error.response &&
          error.response.data &&
          error.response.data.message[0].msg) ||
          "Unknown error"}`
      );
    }
  };
  onInputChange = e => {
    const { target } = e;
    const { value, name } = target;
    this.setState({
      [name]: value,
      errors: {
        ...this.state.errors,
        [name]: null
      }
    });
  };
  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }
  render() {
    return (
      <CardFooter
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <button
          title="Back to top"
          className="scroll"
          onClick={() => {
            this.scrollToTop();
          }}
        >
          <span className="arrow-up glyphicon glyphicon-chevron-up" />
        </button>
        ;
        <form onSubmit={this.onSubmit} noValidate>
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
                  onChange={this.onInputChange}
                />
              </InputGroup>
              <Button type="submit" color="success">
                {" "}
                Send{" "}
              </Button>
            </Col>
          </Row>
        </form>
        &nbsp; &nbsp;
        <p className="copyright">&copy; {new Date().getFullYear()} Copyright</p>
      </CardFooter>
    );
  }
}
export default Footer;
