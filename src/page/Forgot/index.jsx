import React, { Component } from 'react'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import './Forgot.css'

export default class Forgot extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="login-global-container">
          <div className="login-header">
            <div className="login-header-title">My Account</div>
            <div className="login-header-info">
              Register and log in with your account to be able to shop at will
            </div>
          </div>
          <div className="forgot-main-container">
            <div className="login-register-title">
              Forgot your Password?
            </div>
            <div className="forgot-main-info">
              Don't worry! Just fill in your email and we'll send you a link
            </div>
            <input type="text" className="forgot-input" placeholder='Your email address'/>
            <input type="submit" value="Reset Password" className="forgot-button"/>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}
