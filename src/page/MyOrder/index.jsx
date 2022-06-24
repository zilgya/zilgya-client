import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'react-bootstrap-icons'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'

import './MyOrder.css'
import Product from '../../assets/img/cart-product-1.png'

export default class MyOrder extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="login-global-container">
          <div className="login-header">
            <div className="login-header-title">My Order</div>
            <div className="login-header-info">
              See your notifications for the latest updates
            </div>
          </div>
          <div className="profile-seller-navbar">
            <Link to="/profile">
              <div className="profile-seller-navbar-inactive">Profile</div>
            </Link>
            <Link to="/seller/myproduct">
              <div className="profile-seller-navbar-inactive">My Product</div>
            </Link>
            <Link to="/seller/sellproduct">
              <div className="profile-seller-navbar-inactive">Selling Product</div>
            </Link>
            <Link to="/seller/myorder">
              <div className="profile-seller-navbar-active">My Order</div>
            </Link>
          </div>
          <div className="mo-main-content">
            <div className="mo-col-name">
              <div className="mo-col-product">PRODUCTS</div>
              <div className="mo-col-price">PRICE</div>
              <div className="mo-col-quantity">QUANTITY</div>
              <div className="mo-col-status">STATUS ORDER</div>
              <div className="mo-col-total">TOTAL</div>
            </div>
            <div className="mo-item-container">
              <div className="mo-product-item">
                <div className="mo-img-name-container">
                  <div className="mo-img-container"><img src={Product} alt="product" className='mo-item-img' /></div>
                  <div className="mo-product-name">Fabric Mid Century Chair</div>
                </div>
                <div className="mo-product-price">$10.50</div>
                <div className="mo-product-quantity">02</div>
                <div className="mo-product-status"><CheckCircle/> Sent</div>
                <div className="mo-product-total">$21.00</div>
              </div>
              <div className="mo-product-item">
                <div className="mo-img-name-container">
                  <div className="mo-img-container"><img src={Product} alt="product" className='mo-item-img' /></div>
                  <div className="mo-product-name">Fabric Mid Century Chair</div>
                </div>
                <div className="mo-product-price">$10.50</div>
                <div className="mo-product-quantity">02</div>
                <div className="mo-product-status"><CheckCircle/> Sent</div>
                <div className="mo-product-total">$21.00</div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}
