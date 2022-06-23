import React, { Component } from 'react'
import './Login.css'
import axios from "axios";
import { connect } from 'react-redux'
import { loginAction } from '../../redux/actionCreator/auth'
import { Navigate } from 'react-router-dom'

import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'

//axios
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      roles_id: "",
      //isPasswordShown: false,
      isError: false,
      errorMsg: "",
      isSuccess: false,
      isLoggedin: false,
      isShow: false
    };
  }
  componentDidMount() {
    document.title = "Authentication"

  }
  render() {
    const { isSuccess } = this.props
        if (isSuccess === true)
            return <Navigate to="/" />
    return (
      <>
        <Navbar />
        <main className='login-global-container'>
          <div className="login-header">
            <div className="login-header-title">My Account</div>
            <div className="login-header-info">Register and log in with your account to be able to shop at will</div>
          </div>
          <div className="login-main-container">
            <div className="login-login-section">
              <div className="login-register-title">Login</div>
              <input type="text" className="login-input" placeholder='User name or email address'
                onChange={e => {
                  this.setState({
                    email: e.target.value,
                  })
                }} />
              <input type="text" className="login-input" placeholder='Password'
                onChange={e => {
                  this.setState({
                    password: e.target.value,
                  })
                }} />
              <div className="login-button"
                onClick={() => {
                  const { email, password } = this.state;
                  const body = { email, password };
                  this.props.dispatch(loginAction(body))
                }}>Login</div>
              <div className="login-checkbox">
                <label htmlFor="remember-me" className="login-customer">
                  <input type="checkbox" name="remember-me" id="remember-me" className="login-customer-input" />
                  Remember me
                </label>
                <div className='login-forgot'>Forget your password?</div>
              </div>
            </div>
            <div className="login-register-section">
              <div className="login-register-title">Create Account</div>
              <input type="text" className="login-input" placeholder='Email address'
                onChange={(e) => {
                  this.setState({
                    email: e.target.value,
                  });
                }} />
              <input type="password" className="login-input" placeholder='Password'
                onChange={(e) => {
                  this.setState({
                    password: e.target.value,
                  });
                }} />
              <div className="login-checkbox-register">
                <label htmlFor="customer" className="login-customer">
                  <input type="radio" name="role" id="customer" className="login-customer-input"
                    onClick={() => {
                      this.setState({ roles_id: 1 })
                    }} />
                  I'm Customer
                </label>
                <label htmlFor="seller" className="login-customer">
                  <input type="radio" name="role" id="seller" className="login-customer-input"
                    onClick={() => {
                      this.setState({ roles_id: 1 })
                    }} />
                  I'm Seller
                </label>
              </div>
              <div className="login-button"
                onClick={() => {
                  const { email, password, roles_id } = this.state;
                  const body = { email, password, roles_id };
                  axios
                    .post("http://localhost:8000/auth/new", body)
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
                }}>Register</div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}
const mapStateToProps = (reduxState) => {
  const { auth: { userInfo, isSuccess, err } } = reduxState
  return { userInfo, isSuccess, err }
}

export default connect(mapStateToProps)(Login)