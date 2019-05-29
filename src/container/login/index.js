import React, { Component } from "react";
import Axios from "axios";
import Validator, { ValidationTypes } from "js-object-validation";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import LoginComponent from "../../components/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false,
      errors: {},
    };
  }
  componentDidMount = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.history.push("/profile");
    }
  };

  onLogin = async e => {
    e.preventDefault();
    console.log("login button pressed");
    this.setState({
      isLoading: true,
      errors: {},
    });
    try {
      const { email, password } = this.state;
      const obj = { email, password };
      const validations = {
        email: {
          [ValidationTypes.REQUIRED]: true,
          [ValidationTypes.EMAIL]: true,
        },
        password: {
          [ValidationTypes.REQUIRED]: true,
        },
      };
      const messages = {
        email: {
          [ValidationTypes.EMAIL]: "Please enter valid email",
          [ValidationTypes.REQUIRED]: "Please Enter email",
        },
        password: {
          [ValidationTypes.REQUIRED]: "Please Enter password",
        },
      };
      const { isValid, errors } = Validator(obj, validations, messages);
      if (!isValid) {
        console.log(errors);
        this.setState({
          errors,
          isLoading: false,
        });
        return;
      }

      const response = await Axios.post("http://192.168.2.118:8080/login", obj);

      console.log(response);
      localStorage.setItem("token", response.data.token);
      console.log(this.props);
      toast.success("Login Succesfully");
      localStorage.setItem("Cid", response.data.result._id);
      this.props.history.push("/profile");
    } catch (error) {
      this.setState({ isLoading: false });
      toast.error(
        `${(error.response &&
          error.response.data &&
          error.response.data.message) ||
          "Unknown Error"}`
      );
    }
  };

  onInputChange = e => {
    const { target } = e;
    const { value, name } = target;
    this.setState({
      [name]: value,
      errors: {
        ...this.state.errors,
        [name]: null,
      },
    });
  };
  render() {
    const { email, password, isLoading, errors } = this.state;
    return (
      <LoginComponent
        email={email}
        password={password}
        isLoading={isLoading}
        errors={errors}
        onLogin={this.onLogin}
        onInputChange={this.onInputChange}
      />
    );
  }
}

export default withRouter(Login);
