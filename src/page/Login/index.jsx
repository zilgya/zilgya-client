import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import { connect } from "react-redux";
import { loginAction } from "../../redux/actionCreator/auth";
import { Navigate } from "react-router-dom";
import { Eye, EyeSlash } from "react-bootstrap-icons";

import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

//axios
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      roles_id: "",
      isRegisPassShown: false,
      isLoginPassShown: false,
      isError: false,
      errorMsg: "",
      isSuccess: false,
      isLoggedin: false,
      isShow: false,
    };
  }
  componentDidMount() {
    document.title = "Authentication";
  }
  render() {
    const { userInfo } = this.props;
    if (userInfo) return <Navigate to="/" />;
    return (
      <>
        <Navbar />
        <main className="login-global-container">
          <div className="login-header">
            <div className="login-header-title">My Account</div>
            <div className="login-header-info">Register and log in with your account to be able to shop at will</div>
          </div>
          <div className="login-main-container">
            <form className="login-login-section">
              <div className="login-register-title">Login</div>
              <input
                type="text"
                className="login-input"
                placeholder="User name or email address"
                onChange={(e) => {
                  this.setState({
                    email: e.target.value,
                  });
                }}
              />
              <div className="login-input-pass-container">
                <input
                  type={this.state.isLoginPassShown ? "text" : "password"}
                  className="login-input-pass"
                  placeholder="Password"
                  onChange={(e) => {
                    this.setState({
                      password: e.target.value,
                    });
                  }}
                />
                {this.state.isLoginPassShown ? (
                  <Eye
                    className="login-eye"
                    onClick={() => {
                      this.setState({
                        isLoginPassShown: false,
                      });
                    }}
                  />
                ) : (
                  <EyeSlash
                    className="login-eye"
                    onClick={() => {
                      this.setState({
                        isLoginPassShown: true,
                      });
                    }}
                  />
                )}
              </div>
              <input
                type="submit"
                className="login-button"
                value="Login"
                onClick={(e) => {
                  e.preventDefault();
                  const { email, password } = this.state;
                  const body = { email, password };
                  this.props.dispatch(loginAction(body));
                }}
              />

              <div className="login-checkbox">
                <label htmlFor="remember-me" className="login-customer">
                  <input type="checkbox" name="remember-me" id="remember-me" className="login-customer-input" />
                  Remember me
                </label>
                <div className="login-forgot">Forget your password?</div>
              </div>
            </form>
            <form className="login-register-section">
              <div className="login-register-title">Create Account</div>
              <input
                type="text"
                className="login-input"
                placeholder="Email address"
                onChange={(e) => {
                  this.setState({
                    email: e.target.value,
                  });
                }}
              />
              <div className="login-input-pass-container">
                <input
                  type={this.state.isRegisPassShown ? "text" : "password"}
                  className="login-input-pass"
                  placeholder="Password"
                  onChange={(e) => {
                    this.setState({
                      password: e.target.value,
                    });
                  }}
                />
                {this.state.isRegisPassShown ? (
                  <Eye
                    className="login-eye"
                    onClick={() => {
                      this.setState({
                        isRegisPassShown: false,
                      });
                    }}
                  />
                ) : (
                  <EyeSlash
                    className="login-eye"
                    onClick={() => {
                      this.setState({
                        isRegisPassShown: true,
                      });
                    }}
                  />
                )}
              </div>
              <div className="login-checkbox-register">
                <label htmlFor="customer" className="login-customer">
                  <input
                    type="radio"
                    name="role"
                    id="customer"
                    className="login-customer-input"
                    onClick={() => {
                      this.setState({ roles_id: 1 });
                    }}
                  />
                  I'm Customer
                </label>
                <label htmlFor="seller" className="login-customer">
                  <input
                    type="radio"
                    name="role"
                    id="seller"
                    className="login-customer-input"
                    onClick={() => {
                      this.setState({ roles_id: 1 });
                    }}
                  />
                  I'm Seller
                </label>
              </div>
              <input
                type="submit"
                className="login-button"
                value="Register"
                onClick={(e) => {
                  e.preventDefault();
                  const { email, password, roles_id } = this.state;
                  const body = { email, password, roles_id };
                  axios
                    .post(`${process.env.REACT_APP_HOST_API}/auth/new`, body)
                    .then((result) => {
                      console.log(result);
                      this.setState({
                        isSuccess: true,
                        isError: false,
                        errorMsg: "",
                      });
                    })
                    .catch((error) => {
                      // console.log(error)
                      this.setState({
                        isError: true,
                        errorMsg: error.response.data.err,
                      });
                    });
                }}
              />
            </form>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
const mapStateToProps = (reduxState) => {
  const {
    auth: { userInfo, isSuccess, err },
  } = reduxState;
  return { userInfo, isSuccess, err };
};

export default connect(mapStateToProps)(Login);
