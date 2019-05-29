import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
 
  Button,
  CardHeader,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  Input, FormGroup
} from "reactstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      category: "",
      option: [],
      categoryValue: [],
     name:"",
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  componentDidMount = async () => {
    axios.get("http://192.168.2.118:8080/getCategory").then(res => {
      const result = res.data;
      const option = [];
      if (result.result1 && result.result1.length) {
      }
      this.setState({
        option,
        categoryValue: result.result1
      });
    });
  }
  render() {
    return (
                    <>
          
        <CardHeader  className="navbar navbar-expand-md navbar-light"  > 
          <Navbar light expand="md"  >
            Shopping App 
            <NavbarBrand >
              <NavLink link to="" className="navbar-text"  > HOME</NavLink>
              </NavbarBrand> 
            <NavbarToggler onClick={this.toggle} />
            <FormGroup onClick={this.props.onSubmit}>
            <div className="row">
                  <div className="col"> 
                   <Input type="search" name="name" value={this.props.name} onChange={this.props.onChange} placeholder="Search" row />
                  </div>
               <div className="col">
                  <Button color="primary" row>
                   Search
                  </Button>
                  &nbsp; &nbsp;
                  <Button color="primary" row onClick={this.props.onClick}>
                    Reset
                  </Button>&nbsp;
                 </div>
               </div>
            </FormGroup>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar >
                  {/* <FormControl
                    as="select"
                    name="category"
                    value={this.props.name}
                    onClick={this.props.onSubmit}
                    onChange={this.props.onChange}
                  >
                    <option value="">Select Category</option>
                    {categoryValue && categoryValue.length ? (
                      categoryValue.map(category => {
                        return (
                          <option value={category._id}>
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
            &nbsp;&nbsp; &nbsp;&nbsp;
                <NavLink link to="login" className="navbar-text" >Login </NavLink>
              &nbsp;&nbsp; &nbsp;&nbsp;
                <NavLink link to="signup" className="navbar-text"> Signup</NavLink>
            </Collapse>
          </Navbar>
        </CardHeader>
         
</>
    )
  }
}
export default  withRouter(Header);