import axios from "axios";
import React, { Component } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import Footer from "../../component/Footer";
import Loading from "../../component/Loading";
import Navbar from "../../component/Navbar";
import withNavigate from "../../helper/withNavigate";
import withParams from "../../helper/withParams";
import "./Forgot.css";

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      error: null,
      isLoading: false,
      newPassword: "",
      confirmCode: "",
      confNewPassword: "",
      isLoginPassShownNew: false,
      isLoginPassShownConf: false,
    };
  }
  render() {
    const params = this.props.params;
    const { navigate } = this.props;
    return (
      <>
        {this.state.isLoading && <Loading />}
        <Navbar />
        <main className="login-global-container">
          <div className="login-header">
            <div className="login-header-title">My Account</div>
            <div className="login-header-info">Register and log in with your account to be able to shop at will</div>
          </div>
          {params.email ? (
            <div className="forgot-main-container">
              <div className="login-register-title">Confirm Your New Password</div>
              <div className="forgot-main-info">Please fill in the detail below to confirm your new password</div>
              <div className="login-input-pass-container">
                <input
                  type="text"
                  className="login-input-pass"
                  placeholder="Your Confirmation Code"
                  onChange={(e) => {
                    this.setState({
                      confirmCode: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="login-input-pass-container">
                <input
                  type={this.state.isLoginPassShownNew ? "text" : "password"}
                  className="login-input-pass"
                  placeholder="Your New Password"
                  onChange={(e) => {
                    this.setState({
                      newPassword: e.target.value,
                    });
                  }}
                />
                {this.state.isLoginPassShownNew ? (
                  <Eye
                    className="login-eye"
                    onClick={() => {
                      this.setState({
                        isLoginPassShownNew: false,
                      });
                    }}
                  />
                ) : (
                  <EyeSlash
                    className="login-eye"
                    onClick={() => {
                      this.setState({
                        isLoginPassShownNew: true,
                      });
                    }}
                  />
                )}
              </div>
              <div className="login-input-pass-container">
                <input
                  type={this.state.isLoginPassShownConf ? "text" : "password"}
                  className="login-input-pass"
                  placeholder="Confirm Your New Password"
                  onChange={(e) => {
                    this.setState({
                      confNewPassword: e.target.value,
                    });
                  }}
                />
                {this.state.isLoginPassShownConf ? (
                  <Eye
                    className="login-eye"
                    onClick={() => {
                      this.setState({
                        isLoginPassShownConf: false,
                      });
                    }}
                  />
                ) : (
                  <EyeSlash
                    className="login-eye"
                    onClick={() => {
                      this.setState({
                        isLoginPassShownConf: true,
                      });
                    }}
                  />
                )}
              </div>
              <input
                type="submit"
                value="Confirm"
                className="forgot-button"
                onClick={() => {
                  this.setState({
                    isLoading: true,
                  });
                  const { newPassword, confirmCode, confNewPassword } = this.state;
                  if (newPassword !== confNewPassword) {
                    this.setState({
                      isLoading: false,
                      error: "Password do not match",
                    });
                    let x = document.getElementById("toast");
                    x.className = "show";
                    setTimeout(function () {
                      x.className = x.className.replace("show", "");
                    }, 1000);
                    return;
                  }
                  if (!newPassword || !confNewPassword) {
                    this.setState({
                      isLoading: false,
                      error: "Please Input Your Password",
                    });
                    let x = document.getElementById("toast");
                    x.className = "show";
                    setTimeout(function () {
                      x.className = x.className.replace("show", "");
                    }, 1000);
                    return;
                  }
                  if (!confirmCode) {
                    this.setState({
                      isLoading: false,
                      error: "Please Input Confirm Code",
                    });
                    let x = document.getElementById("toast");
                    x.className = "show";
                    setTimeout(function () {
                      x.className = x.className.replace("show", "");
                    }, 2500);
                    return;
                  }
                  const body = {
                    email: params.email,
                    newPassword,
                    confirmCode,
                  };
                  axios
                    .patch(`${process.env.REACT_APP_HOST_API}/user/edit-password`, body)
                    .then((result) => {
                      this.setState({
                        error: null,
                        message: result.data.message,
                        isLoading: false,
                      });
                      let x = document.getElementById("snackbar");
                      x.className = "show";

                      setTimeout(function () {
                        navigate("/auth");
                        x.className = x.className.replace("show", "");
                      }, 2500);
                    })
                    .catch((error) => {
                      this.setState({
                        message: "",
                        error: error.response ? error.response.data.error : error.message,
                        isLoading: false,
                      });
                      let x = document.getElementById("toast");
                      x.className = "show";
                      setTimeout(function () {
                        x.className = x.className.replace("show", "");
                      }, 1000);
                    });
                }}
              />{" "}
            </div>
          ) : (
            <div className="forgot-main-container">
              <div className="login-register-title">Forgot your Password?</div>
              <div className="forgot-main-info">Don't worry! Just fill in your email and we'll send you a link</div>
              <input
                type="text"
                className="forgot-input"
                placeholder="Your email address"
                onChange={(e) => {
                  this.setState({
                    email: e.target.value,
                  });
                }}
              />
              <input
                type="submit"
                value="Reset Password"
                className="forgot-button"
                onClick={() => {
                  const { email } = this.state;
                  this.setState({
                    isLoading: true,
                  });
                  axios
                    .get(`${process.env.REACT_APP_HOST_API}/auth/forgot-password/${email}`)
                    .then((result) => {
                      this.setState({
                        error: null,
                        message: result.data.message,
                        isLoading: false,
                      });
                      let x = document.getElementById("snackbar");
                      x.className = "show";
                      setTimeout(function () {
                        x.className = x.className.replace("show", "");
                      }, 2500);
                    })
                    .catch((error) => {
                      this.setState({
                        error: error.response ? error.response.data.error : error.message,
                        isLoading: false,
                      });
                      let x = document.getElementById("toast");
                      x.className = "show";
                      setTimeout(function () {
                        x.className = x.className.replace("show", "");
                      }, 1000);
                    });
                }}
              />
            </div>
          )}
        </main>
        <Footer />
        <div className="snackbar-wrapper">
          <div id="snackbar">{this.state.message}</div>
        </div>
        {/* <div id="toast">Register Error</div> */}
        <div className="toast-container">
          <div id="toast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-body">{this.state.error}</div>
          </div>
        </div>
      </>
    );
  }
}

export default withNavigate(withParams(Forgot));
