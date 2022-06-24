import React, { Component } from 'react'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import { Link } from 'react-router-dom'
import { PlusLg } from 'react-bootstrap-icons'

import './SellProduct.css'

export default class SellProduct extends Component {
  constructor() {
    super();
    this.state = {
      pict: [],
      file: []
    }
  }

  // coba coba
  inputPictHandler = (pict) => {
    let newPict = [...this.state.pict]
    newPict.push(pict)
    this.setState({ pict: newPict })
  }

  render() {
    return (
      <>
        <Navbar />
        <main className="login-global-container">
          <div className="login-header">
            <div className="login-header-title">Selling Product</div>
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
              <div className="profile-seller-navbar-active">Selling Product</div>
            </Link>
            <Link to="/seller/myorder">
              <div className="profile-seller-navbar-inactive">My Order</div>
            </Link>
          </div>
          <div className="sp-main-container">
            <div className="sp-inventory-container">
              <div className="sp-inventory-title">Inventory</div>
              <input type="text" className="sp-inventory-name-input" placeholder='Name of goods' />
              <input type="text" className="sp-inventory-desc-input" placeholder='Description Product' />
            </div>
            <div className="sp-inventory-container">
              <div className="sp-inventory-title">Item Details</div>
              <input type="text" className="sp-inventory-name-input" placeholder='Unit price' />
              <div className="sp-item-stock-input-container">
                <input type="text" className="sp-inventory-stock-input" placeholder='Unit Stock' />
                <div className="sp-item-stock-pcs">/pcs</div>
              </div>
              <div className="sp-stock-condition">Stock Condition</div>
              <div className="sp-stock-condition-radio-container">
                <label htmlFor="new" className="sp-stock-label">
                  <input type="radio" name="stock" id="new" className='sp-stock-radio' />
                  New Product
                </label>
                <label htmlFor="second" className="sp-stock-label">
                  <input type="radio" name="stock" id="second" className='sp-stock-radio' />
                  Second Product
                </label>
              </div>
              <div className="sp-inventory-title">Photo of Goods</div>
              <div className="sp-photo-container">
                {this.state.pict.length === 1 ?
                  <><div className="sp-photo-preview-row">

                    <div className="sp-photo-preview"><img src={this.state.pict[0]} alt="preview" /></div>
                  </div>
                  </>
                  : this.state.pict.length === 2 ?
                    <>
                      <div className="sp-photo-preview-row">
                        <div className="sp-photo-preview"><img src={this.state.pict[0]} alt="preview" /></div>
                        <div className="sp-photo-preview"><img src={this.state.pict[1]} alt="preview" /></div>
                      </div>
                    </>
                    : this.state.pict.length === 3 ?
                      <>
                        <div className="sp-photo-preview-row">
                          <div className="sp-photo-preview"><img src={this.state.pict[0]} alt="preview" /></div>
                          <div className="sp-photo-preview"><img src={this.state.pict[1]} alt="preview" /></div>
                          <div className="sp-photo-preview"><img src={this.state.pict[2]} alt="preview" /></div>
                        </div>
                      </>
                      : this.state.pict.length === 4 ?
                        <>
                          <div className="sp-photo-preview-row">
                            <div className="sp-photo-preview"><img src={this.state.pict[0]} alt="preview" /></div>
                            <div className="sp-photo-preview"><img src={this.state.pict[1]} alt="preview" /></div>
                            <div className="sp-photo-preview"><img src={this.state.pict[2]} alt="preview" /></div>
                          </div>
                          <div className="sp-photo-preview-row">
                            <div className="sp-photo-preview"><img src={this.state.pict[3]} alt="preview" /></div>
                          </div>
                        </>
                        : this.state.pict.length === 5 ?
                          <>
                            <div className="sp-photo-preview-row">
                              <div className="sp-photo-preview"><img src={this.state.pict[0]} alt="preview" /></div>
                              <div className="sp-photo-preview"><img src={this.state.pict[1]} alt="preview" /></div>
                              <div className="sp-photo-preview"><img src={this.state.pict[2]} alt="preview" /></div>
                            </div>
                            <div className="sp-photo-preview-row">
                              <div className="sp-photo-preview"><img src={this.state.pict[3]} alt="preview" /></div>
                              <div className="sp-photo-preview"><img src={this.state.pict[4]} alt="preview" /></div>
                            </div>
                          </>
                          : <></>
                }
                {this.state.pict.length === 5 ?
                  <></>
                  :
                  <label htmlFor='pict1' className="sp-photo-select"
                    onClick={() => this.inputPictHandler(1)}>
                    {/* <input type="file" name="pict1" id="pict1" className='sp-photo-select-input' /> */}
                    <PlusLg className='sp-photo-plus' />
                    <div className="sp-photo-select-info">Add more image</div>
                  </label>
                }



              </div>
              <div className="sp-sell-button">Sell Product</div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}
