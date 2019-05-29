import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import Header from "../../container/Layout/Header";
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.State = {};
  }
  render() {
    const { isLoading } = this.props;
    const { email: emailError, password: passwordError } = this.props.errors;
    return (
      <div>
        <Header />
        <div />
        {this.props.children}
        <div className="login_Container">
          <Form onSubmit={this.props.onLogin} noValidate className="login_form">
            <h1>Login</h1>
            <p className="text-muted">Sign In to your account</p>
            <InputGroup className="mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fa fa-envelope" />
                </InputGroupText>
              </InputGroupAddon>
             
                <Input
                  block
                  type="email"
                  name="email"
                  placeholder="email"
                  autoComplete="username"
                  onChange={this.props.onInputChange}
                />
            
            </InputGroup>
              {emailError ? <p style={{ color: "red" }}>{emailError}</p> : null}

            <InputGroup className="mb-4">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fa fa-key" />
                </InputGroupText>
              </InputGroupAddon>
            
                <Input
                  block
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={this.props.onInputChange}
                />
               </InputGroup>
             {passwordError ? (
                <p style={{ color: "red" }}>{passwordError}</p>
              ) : null}
            <span>
              <Button color="success" block>
                {isLoading ? "Please wait.." : " Log In"}
              </Button>
            </span>
            <Row>
              <Col sm="6" className="text-right">
                <Link to={"/signup"}>Create new account</Link>
              </Col>
              <Col sm="6" className="text-right">
                {" "}
                <Link to={"/forgot-password"}>Forgot Password ?</Link>
              </Col>
            </Row>
          </Form>
          {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card> */}
        </div>
      </div>
    );
  }
}
export default LoginComponent;
