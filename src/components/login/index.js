import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

class LoginComponent extends Component {
  
   constructor(props) {
    
    super(props);
   
  }

  render() {
    const {  isLoading } = this.props;
    const { email: emailError, password: passwordError } = this.props.errors;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card
                  className="p-4"
                  style={{ marginTop: "50px", marginBottom: "50px" }}
                >
                  <CardBody>
                    <Form onSubmit={this.props.onLogin} noValidate>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
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
                        {emailError ? (
                          <p style={{ color: "red" }}>{emailError}</p>
                        ) : null}
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-key" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={this.props.onInputChange}
                        />
                        {passwordError ? (
                          <p style={{ color: "red" }}>{passwordError}</p>
                        ) : null}
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="success"
                            className="px-4"
                          
                          >
                            {isLoading ? "Please wait.." : " Log In"}
                          {/* Login */}
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link to={"/forgot-password"}>
                            Forgot Password
                              </Link>
                        </Col>
                        <br />
                        <Col xs="6" className="text-left">
                          <Link to={"/signup"}>
                            Not Registered click Here...
                          </Link>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
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
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginComponent;
