import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Validator, { ValidationTypes } from "js-object-validation";
import Swal from "sweetalert2";
import ForgotComponent from "../../components/forgot-password";
class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      showError: false,
      messageFromServer: "",
      showNullError: false,
      isLoading: false,
      errors: {},
      toastId: null
    };
  }
  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     this.props.history.push("/product-list");
  //   }
  // }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      errors: {
        ...this.state.errors,
        [name]: null
      }
    });
  };

  sendEmail = async e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    try {
      const { email } = this.state;
      const obj = { email };
      const validations = {
        email: {
          [ValidationTypes.REQUIRED]: true,
          [ValidationTypes.EMAIL]: true
        }
      };
      const messages = {
        email: {
          [ValidationTypes.REQUIRED]: "Please enter email address.",
          [ValidationTypes.EMAIL]: "Please enter valid email address."
        }
      };
      const { isValid, errors } = Validator(obj, validations, messages);
      if (!isValid) {
        this.setState({
          errors,
          isLoading: false
        });
        return;
      }

      const response = await axios.post(
        "http://192.168.2.118:8080/forgotPasswordUser",
        obj
      );
      console.log(response);
      if (response) {
       toast.info("link has been sent on your email");
        this.setState({ email: "", isLoading: false });}

        this.props.history.push("/login");
    
    } catch (error) {
      console.log(error.response.data);
      this.setState({ isLoading: false });
      // Swal.fire({
      //   type: "error",
      //   title: "Oops...",
      //   text: "Something went wrong!"
      // });
      if (!toast.isActive(this.toastId)) {
        this.toastId = toast.error(
        `${(error.response &&
          error.response.data &&
          error.response.data.message) ||
          "Unknown error"}`
        
      );
        }
    }
  };

  render() {
    return (
      <ForgotComponent
        email={this.state.email}
        isLoading={this.state.isLoading}
        errors={this.state.errors}
        sendEmail={this.sendEmail}
        handleChange={this.handleChange}
      />
    );
  }
}
export default ForgotPassword;