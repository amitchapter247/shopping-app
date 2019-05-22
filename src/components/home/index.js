import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,

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
 Input, FormGroup
} from "reactstrap";
import Slider from "./card";
class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Card className="card-home">
        {" "}
        <CardHeader> 
             <Navbar light expand="md">
          Shopping App <NavbarBrand link to="/">Home</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <FormGroup row>
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

                            <NavItem>
                                <NavLink link to="login" >Login </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink link to="signup"> Signup</NavLink>
                            </NavItem>
              </Collapse>
              
            
            </Navbar>
          
        </CardHeader>{" "}
       
        <CardBody>
          {" "}
                <CardTitle>Popular Products</CardTitle>{" "}
                <hr />
     {/* <Slider {...settings}>
    {
                    slideItems.map((slideItem) => (
                        <div key={slideItem.id}>
                            <Slide title={slideItem.title} />
                        </div>
                    ))
                }  
                </Slider> */}
          {/* <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>{" "} */}

         <Card/>
        </CardBody>{" "}
       
       
       
       
       
       
       
       
       
       
       
       
        <CardFooter>Footer</CardFooter>{" "}
      </Card>
    );
  }
}

export default Home;
