import React, { Component } from 'react'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'

import './Checkout.css'

export default class Checkout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className='login-global-container'>
          <div className="co-header">
            <div className="co-header-menu">Cart {'>'} Checkout</div>
            <div className="co-header-title-container">
              <div className="co-header-title">Check Out</div>
              <div className="co-header-info">Pay and get your ordered items</div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}
