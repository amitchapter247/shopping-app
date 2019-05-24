import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardFooter, Row, Col } from 'reactstrap';

class FooterComponent extends Component {


  render() {
    return (

      <CardFooter body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>

          <Row>
            <Col>
              <p className="a">Get to know us</p>
              <li className="li"><Link className="a" to="./">Home</Link></li>
              <li className="li"><Link className="a" to="contactus">Contact Us</Link></li>
              <li className="li"><Link className="a" to="about">About us</Link></li>
              <li className="li"><Link className="a" to="blog">Blog</Link></li>


            </Col>
            <Col>
              <p className="a">Connect with us at social media </p>
              <li className="li"><a className="a" href="https://www.facebook.com/"><i className="fab fa-facebook-square left"></i>Facebook </a></li>
              <li className="li"><a className="a" href="https://www.twitter.com/"><i className="fab fa-twitter-square left"></i>Twitter </a></li>
              <li className="li"><a className="a" href="https://in.linkedin.com//"><i className="fab fa-linkedin-in left"></i>linkedin </a></li>
            </Col>

            <Col>
              <p className="a"> Legal</p>
              <li className="li"><Link className="a" to="terms-and-condition">Terms</Link></li>
              <li className="li"><Link className="a" to="privacy">Privacy</Link></li>

            </Col>
          </Row>
          <p className="copyright">
            &copy; {(new Date().getFullYear())} Copyright
                </p>
        </CardFooter>
    );
  }
}
export default FooterComponent;
