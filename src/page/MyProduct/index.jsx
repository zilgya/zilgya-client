import React, { Component } from 'react'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import { CheckCircle } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

import Product from '../../assets/img/product.png'
import './MyProduct.css'

export default class MyProduct extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="login-global-container">
          <div className="login-header">
            <div className="login-header-title">My Product</div>
            <div className="login-header-info">
              See your notifications for the latest updates
            </div>
          </div>
          <div className="profile-seller-navbar">
            <Link to="/profile">
              <div className="profile-seller-navbar-inactive">Profile</div>
            </Link>
            <Link to="/seller/myproduct">
              <div className="profile-seller-navbar-active">My Product</div>
            </Link>
            <Link to="/seller/sellproduct">
              <div className="profile-seller-navbar-inactive">Selling Product</div>
            </Link>
            <Link to="/seller/myorder">
              <div className="profile-seller-navbar-inactive">My Order</div>
            </Link>
          </div>
          <div className="wl-main-content">
            <div className="wl-col-name">
              <div className="wl-col-product">Product</div>
              <div className="wl-col-status">Stock Status</div>
              <div className="wl-col-price">Price</div>
            </div>
            <div className="wl-product-container">
              <div className="wl-product-item">
                <div className="wl-img-name-container">
                  <div className="wl-product-img-container"><img src={Product} alt="product" className='wl-product-img' /></div>
                  <div className="wl-product-name">Dining Side Chair in Beige</div>
                </div>
                <div className="wl-product-stock"><CheckCircle /> In Stock</div>
                <div className="wl-product-price-container">
                  <div className="wl-product-price">
                    $765.99
                  </div>
                  <div className="sp-delete-button">Delete</div>
                </div>
              </div>
              <div className="wl-product-item">
                <div className="wl-img-name-container">
                  <div className="wl-product-img-container"><img src={Product} alt="product" className='wl-product-img' /></div>
                  <div className="wl-product-name">Dining Side Chair in Beige</div>
                </div>
                <div className="wl-product-stock"><CheckCircle /> In Stock</div>
                <div className="wl-product-price-container">
                  <div className="wl-product-price">
                    $765.99
                  </div>
                  <div className="sp-delete-button">Delete</div>
                </div>
              </div>
              <div className="wl-product-item">
                <div className="wl-img-name-container">
                  <div className="wl-product-img-container"><img src={Product} alt="product" className='wl-product-img' /></div>
                  <div className="wl-product-name">Dining Side Chair in Beige</div>
                </div>
                <div className="wl-product-stock"><CheckCircle /> In Stock</div>
                <div className="wl-product-price-container">
                  <div className="wl-product-price">
                    $765.99
                  </div>
                  <div className="sp-delete-button">Delete</div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}
