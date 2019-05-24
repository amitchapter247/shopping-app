import React, { Component } from "react";
import { Card, CardHeader, CardFooter, CardBody } from "reactstrap";
import CardContainer from "../../container/home/card";
import FooterComponent from "../../components/home/footer";
// import NavbarHeadForCard from "../../navbar1";
import{
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
  render() {
    return (
      <Card className={"card-home"}>
        <CardHeader>header</CardHeader>
        <CardBody>
          <CardContainer />
        </CardBody>
        <CardFooter>
          <FooterComponent />
        </CardFooter>
      </Card>
    );
  }
}

export default Home;
