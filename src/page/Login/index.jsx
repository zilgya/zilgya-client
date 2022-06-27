import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import { connect } from "react-redux";
import { loginAction } from "../../redux/actionCreator/auth";
import { Eye, EyeSlash } from "react-bootstrap-icons";

import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import withLocation from "../../helper/withLocation";
import Loading from "../../component/Loading";
import withNavigate from "../../helper/withNavigate";

//axios
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailReg: "",
      passwordReg: "",
      roles_id: "",
      isRegisPassShown: false,
      isLoginPassShown: false,
      isError: false,
      errorMsg: "",
      isSuccess: false,
      isLoggedin: false,
      isShow: false,
      errorMsgone: "",
      isDuplicate: false,
      message: "",
      loadingRegister: false,
    };
  }
  componentDidMount() {
    document.title = "Authentication";
    const { state } = this.props.location;
    this.setState({
      message: null,
    });
    // if (state !== null && !state.isAuthenticated) {
    //   this.setState({
    //     isShow: true
    //   });
    // }
    if (state) {
      if (!state.isAuthenticated) {
        this.setState({
          isError: true,
          errorMsg: "Login First",
        });
        let x = document.getElementById("toast");
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 8000);
        return;
      }
      if (state.message) {
        this.setState({
          message: state,
        });
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 8000);
        return;
      }
    }
  }
  render() {
    console.log("LOCATION", this.props.location);
    const { isLoading } = this.props;
    return (
      <>
        {isLoading && <Loading />}
        {this.state.loadingRegister && <Loading />}

        <Navbar />
        <main className="login-global-container">
          <div className="login-header">
            <div className="login-header-title">My Account</div>
            <div className="login-header-info">Register and log in with your account to be able to shop at will</div>
          </div>
          <div className="login-main-container">
            <form
              className="login-login-section"
              onSubmit={(e) => {
                e.preventDefault();
                const { email, password } = this.state;
                const body = { email, password };
                this.props
                  .dispatch(loginAction(body))
                  .then((result) => {
                    console.log(result);
                    let x = document.getElementById("snackbar");
                    x.className = "show";
                    setTimeout(function () {
                      x.className = x.className.replace("show", "");
                    }, 5000);
                    this.setState({
                      isSuccess: true,
                      isError: false,
                      errorMsg: "",
                      message: null,
                    });
                    delete this.props.location.state;
                    window.history.replaceState({ ...this.props.location.state }, "");
                  })
                  .catch((error) => {
                    console.log(error);
                    let x = document.getElementById("toast");
                    x.className = "show";
                    setTimeout(function () {
                      x.className = x.className.replace("show", "");
                    }, 5000);
                    this.setState({
                      isError: true,
                      errorMsg: error.response.data.err.msg,
                    });
                  });
              }}
            >
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
                  this.props
                    .dispatch(loginAction(body))
                    .then((result) => {
                      console.log(result);
                      let x = document.getElementById("snackbar");
                      x.className = "show";
                      setTimeout(function () {
                        x.className = x.className.replace("show", "");
                      }, 5000);
                      this.setState({
                        isSuccess: true,
                        isError: false,
                        errorMsg: "",
                        message: null,
                      });
                      delete this.props.location.state;
                      window.history.replaceState({ ...this.props.location.state }, "");
                    })
                    .catch((error) => {
                      console.log(error);
                      let x = document.getElementById("toast");
                      x.className = "show";
                      setTimeout(function () {
                        x.className = x.className.replace("show", "");
                      }, 5000);

                      this.setState({
                        isError: true,
                        errorMsg: error.response.data.err.msg,
                      });
                    });
                }}
              />

              <div className="login-checkbox">
                <label htmlFor="remember-me" className="login-customer">
                  <input type="checkbox" name="remember-me" id="remember-me" className="login-customer-input" />
                  Remember me
                </label>
                <div className="login-forgot" onClick={() => this.props.navigate("/auth/forgot")}>
                  Forget your password?
                </div>
              </div>
            </form>
            <form
              className="login-register-section"
              onSubmit={(e) => {
                e.preventDefault();
                const { emailReg, passwordReg, roles_id } = this.state;
                const body = { email: emailReg, password: passwordReg, roles_id: roles_id };
                axios
                  .post(`${process.env.REACT_APP_HOST_API}/auth/new`, body)
                  .then((result) => {
                    console.log(result);
                    let x = document.getElementById("snackbar");
                    x.className = "show";
                    setTimeout(function () {
                      x.className = x.className.replace("show", "");
                    }, 5000);

                    this.setState({
                      isSuccess: true,
                      isError: false,
                      errorMsg: "",
                      message: null,
                    });
                    delete this.props.location.state;
                    window.history.replaceState({ ...this.props.location.state }, "");
                  })
                  .catch((error) => {
                    console.log(error);
                    let x = document.getElementById("toast");
                    x.className = "show";
                    setTimeout(function () {
                      x.className = x.className.replace("show", "");
                    }, 5000);

                    this.setState({
                      isError: true,
                      errorMsg: error.response.data.err.msg,
                    });
                  });
              }}
            >
              <div className="login-register-title">Create Account</div>
              <input
                type="text"
                className="login-input"
                placeholder="Email address"
                onChange={(e) => {
                  this.setState({
                    emailReg: e.target.value,
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
                      passwordReg: e.target.value,
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
                      this.setState({ roles_id: 2 });
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
                  const { emailReg, passwordReg, roles_id } = this.state;
                  const body = { email: emailReg, password: passwordReg, roles_id };
                  this.setState({
                    loadingRegister: true,
                  });
                  axios
                    .post(`${process.env.REACT_APP_HOST_API}/auth/new`, body)
                    .then((result) => {
                      console.log(result);
                      let x = document.getElementById("snackbar");
                      x.className = "show";
                      setTimeout(function () {
                        x.className = x.className.replace("show", "");
                      }, 5000);

                      this.setState({
                        isSuccess: true,
                        isError: false,
                        errorMsg: "",
                        message: null,
                        loadingRegister: false,
                      });
                      delete this.props.location.state;
                      window.history.replaceState({ ...this.props.location.state }, "");
                    })
                    .catch((error) => {
                      console.log(error);
                      let x = document.getElementById("toast");
                      x.className = "show";
                      setTimeout(function () {
                        x.className = x.className.replace("show", "");
                      }, 5000);

                      this.setState({
                        isError: true,
                        errorMsg: error.response.data.err.msg,
                        loadingRegister: false,
                      });
                    });
                }}
              />
            </form>
          </div>
        </main>
        <Footer />
        <div className="snackbar-wrapper">
          <div id="snackbar">{this.state.message ? this.state.message : "Register success, please check email for verification"}</div>
        </div>
        {/* <div id="toast">Register Error</div> */}
        <div className="toast-container">
          <div id="toast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-body">{this.state.isError ? `${this.state.errorMsg}` : "Register success, please check email for verification"}</div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => {
  const {
    auth: { userInfo, isSuccess, err, isLoading },
  } = reduxState;
  return { userInfo, isSuccess, err, isLoading };
};

export default connect(mapStateToProps)(withNavigate(withLocation(Login)));
