import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Label,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import { withRouter } from "react-router-dom";
const BASE_URL = "http://192.168.2.112:8080/";


class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.State = {
    };
  }

  render() {
    const { isLoading } = this.props;
    const {
      name: nameError,
      email: emailError,
      mobile_no: mobile_noError,
      gender: genderError,

    } = this.props.errors;

    return (
      <div>
        <div className="app flex-row align-items-center">
          <Container className="container">
            <Row className="justify-content-center">
              <Col md="9" lg="7" xl="6">
                <Card className="mx-4" style={{ marginTop: "50px" }}>
                  <CardBody className="p-4">
                    <Form onSubmit={this.props.onSubmit} noValidate>
                      <h1>Profile</h1>

                      <p className="text-muted"></p>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-key left" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Name"
                          autoComplete="name"
                          value={this.props.name}
                          onChange={this.props.onInputChange}
                        />
                        {nameError ? (
                          <p style={{ color: "red" }}>{nameError}</p>
                        ) : null}
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="email"
                          placeholder="Email"
                          autoComplete="email"
                          value={this.props.email}
                          onChange={this.props.onInputChange}
                        />
                        {emailError ? (
                          <p style={{ color: "red" }}>{emailError}</p>
                        ) : null}
                      </InputGroup>

                     

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-phone-square" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="Number"
                          name="mobile_no"
                          placeholder="Mobile no."
                          autoComplete="mobile_no"
                          value={this.props.mobile_no}
                          onChange={this.props.onInputChange}
                        />
                        {mobile_noError ? (
                          <p style={{ color: "red" }}>{mobile_noError}</p>
                        ) : null}
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-female" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Label for="gender" />
                        <Input
                        readOnly
                          type="text"
                          name="gender"
                          
                          value={this.props.gender}
                          onChange={this.props.onInputChange}
                        >
                          
                        </Input>
                        {/* {genderError ? (
                          <p style={{ color: "red" }}>{genderError}</p>
                        ) : null} */}
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <Label for="file"> Upload your picture </Label>
                        <Input
                          type="file"
                          autoComplete="file"
                          // value={this.props.file}
                          onChange={this.props.onfileChange}
                        />
                        {/* {fileError ? (
                          <p style={{ color: "red" }}>{fileError}</p>
                        ) : null} */}
                      </InputGroup>

                

                      <Button color="success" block>
                        {isLoading ? "please wait.." : "Create Account"}
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileComponent);
