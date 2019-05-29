import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardFooter, Row, Col } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <CardFooter
       >
        <Row>
          <Col>
            <p className="a">Get to know us</p>
            <li className="li">
              <Link className="a" to="./">
                Home
              </Link>
            </li>
            <li className="li">
              <Link className="a" to="contactus">
                Contact Us
              </Link>
            </li>
            <li className="li">
              <Link className="a" to="about">
                About us
              </Link>
            </li>
            <li className="li">
              <Link className="a" to="blog">
                Blog
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
        </Row>
        <p className="copyright">&copy; {new Date().getFullYear()} Copyright</p>
      </CardFooter>
    );
  }
}
export default Footer;