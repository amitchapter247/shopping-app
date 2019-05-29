import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Card className="head">
        {" "}
        <CardHeader>
          <Navbar light expand="md" link to="/">
          <div className="a">
            <NavbarBrand href="/" className="a">Shopping Centre</NavbarBrand></div>{" "}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="a">
                    Category
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Clothes</DropdownItem>
                    <DropdownItem>Footwear</DropdownItem>

                    <DropdownItem>Accesories</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              &nbsp; &nbsp;
              <NavLink to={"login"} className="a">Login </NavLink>
              &nbsp; &nbsp;
              <NavLink to="signup" className="a"> Signup</NavLink>
            </Collapse>
          </Navbar>
        </CardHeader>
      </Card>
    );
  }
}

export default Header;
