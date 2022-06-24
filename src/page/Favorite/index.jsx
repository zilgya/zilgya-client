import React, { Component } from 'react'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import { CheckCircle, HeartFill } from 'react-bootstrap-icons'
import './Favorite.css'
import Product from '../../assets/img/product.png'


export default class Favorite extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="login-global-container">
          <div className="co-header">
            <div className="co-header-menu">Favorite {'>'}</div>
            <div className="co-header-title-container">
              <div className="co-header-title">Favorite</div>
              <div className="co-header-info">Pay and get your ordered items</div>
            </div>
          </div>
          <div className="wl-main-content">
            <div className="wl-col-name">
              <div className="wl-col-product">Product</div>
              <div className="wl-col-status">Stock Status</div>
              <div className="wl-col-price">Price</div>
            </div>
            <div className="wl-product-container">
              <div className="favorite-product-item">
                <div className="wl-img-name-container">
                  <HeartFill className='favorite-heart'/>
                  <div className="wl-product-img-container"><img src={Product} alt="product" className='wl-product-img' /></div>
                  <div className="wl-product-name">Dining Side Chair in Beige</div>
                </div>
                <div className="wl-product-stock"><CheckCircle /> In Stock</div>
                <div className="wl-product-price-container">
                  <div className="wl-product-price">
                  $765.99
                  </div>
                  <div className="wl-addcart-button">Add to cart</div>
                  </div>
              </div>
              <div className="favorite-product-item">
                <div className="wl-img-name-container">
                  <HeartFill className='favorite-heart'/>
                  <div className="wl-product-img-container"><img src={Product} alt="product" className='wl-product-img' /></div>
                  <div className="wl-product-name">Dining Side Chair in Beige</div>
                </div>
                <div className="wl-product-stock"><CheckCircle /> In Stock</div>
                <div className="wl-product-price-container">
                  <div className="wl-product-price">
                  $765.99
                  </div>
                  <div className="wl-addcart-button">Add to cart</div>
                  </div>
              </div>
              <div className="favorite-product-item">
                <div className="wl-img-name-container">
                  <HeartFill className='favorite-heart'/>
                  <div className="wl-product-img-container"><img src={Product} alt="product" className='wl-product-img' /></div>
                  <div className="wl-product-name">Dining Side Chair in Beige</div>
                </div>
                <div className="wl-product-stock"><CheckCircle /> In Stock</div>
                <div className="wl-product-price-container">
                  <div className="wl-product-price">
                  $765.99
                  </div>
                  <div className="wl-addcart-button">Add to cart</div>
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
