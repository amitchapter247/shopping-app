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
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  FormGroup
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
        <CardHeader >
          <Navbar light expand="md" link to="/" >
          <NavbarBrand href="/">Shopping Centre</NavbarBrand> <NavbarToggler onClick={this.toggle} />
            <FormGroup row className={"search"}>
              <Input type="search" name="search" placeholder="Search" row />
            </FormGroup>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
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
              <NavLink link to="login">
                Login{" "}
              </NavLink>
              &nbsp; &nbsp;
              <NavLink link to="signup">
                {" "}
                Signup
              </NavLink>
            </Collapse>
          </Navbar>
        </CardHeader>
       </Card>
    );
  }
}

export default Header;
