import React, { Component } from 'react'
import './Login.css'

import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'

export default class Login extends Component {
  render() {
    return (
      <>
      <Navbar/>
        <main className='login-global-container'>
          <div className="login-header">
            <div className="login-header-title">My Account</div>
            <div className="login-header-info">Register and log in with your account to be able to shop at will</div>
          </div>
          <div className="login-main-container">
            <div className="login-login-section">
              <div className="login-register-title">Login</div>
              <input type="text" className="login-input" placeholder='User name or email address' />
              <input type="text" className="login-input" placeholder='Password' />
              <div className="login-button">Login</div>
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
              <input type="text" className="login-input" placeholder='Email address' />
              <input type="text" className="login-input" placeholder='Password' />
              <div className="login-checkbox-register">
                <label htmlFor="customer" className="login-customer">
                  <input type="radio" name="role" id="customer" className="login-customer-input"/>
                  I'm Customer
                </label>
                <label htmlFor="seller" className="login-customer">
                  <input type="radio" name="role" id="seller" className="login-customer-input"/>
                  I'm Seller
                </label>
              </div>
              <div className="login-button">Register</div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}
