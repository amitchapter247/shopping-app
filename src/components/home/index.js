import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
} from "reactstrap";
import Footer from "../../container/Layout/Footer";
class Home extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      category: "",
      option: [],
      categoryValue: [],
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  componentDidMount = async () => {
    axios.get("http://192.168.2.107:8080/getCategory").then(res => {
      const result = res.data;
      const option = [];
      if (result.result1 && result.result1.length) {
      }
      this.setState({
        option,
        categoryValue: result.result1,
      });
    });
  };
  render() {
  
    return (
      <div>
        <CardHeader>
          <Navbar light expand="md">
            Shopping App
            <NavbarBrand link to="/" className="navbar-text" >
              Home
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  {/* <FormControl
                    as="select"
                    name="category"
                    value={this.props.name}
                    onClick={this.props.onSubmit }
                    onClick={<Link to="product-list" ></Link>}
                    onChange={this.props.onChange}
                   
                  >
                    <option value="">Select Category</option>
                    {categoryValue && categoryValue.length ? (
                      categoryValue.map(category => {
                        return (
                          <option value={category._id} >
                            {category.category}
                           
                          </option>
                        );
                      })
                    ) : null}
                    )
                    </FormControl> */}
                  {/* name="category"
                        value={this.state.category}
                        onChange={this.onChangeCategory}>
                  <DropdownToggle nav caret>
                    Category
                    </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem value="">Select Category</DropdownItem>
                        {categoryValue && categoryValue.length
                          ? categoryValue.map(Category => {
                            return (
                              <DropdownItem value={Category._id}
                                onClick={this.props.onsearchCatagory} >
                                {Category.category}
                              </DropdownItem>
                            );
                          })
                          : null}
                        )
                    {/* <DropdownItem>Clothes</DropdownItem>
                    <DropdownItem>Footwear</DropdownItem>
                    <DropdownItem>Accesories</DropdownItem> */}
                  {/* </DropdownMenu>  */}
                </UncontrolledDropdown>
              </Nav>
              &nbsp;&nbsp;
              <NavLink link to="product-list" className="navbar-text" >
                Products{" "}
              </NavLink>
              &nbsp;&nbsp;
              <NavLink link to="login" className="navbar-text" >
                Login{" "}
              </NavLink>
              &nbsp;&nbsp;
              <NavLink link to="signup" className="navbar-text" >
                {" "}
                Signup
              </NavLink>
            </Collapse>
          </Navbar>
        </CardHeader>
        {this.props.children}
        <div className="row">
          <div className="col-md-9">
            <Card>
              <CardBody>
                <h1>HELLLO HOME</h1>
              </CardBody>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
