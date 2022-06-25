import React, { Component } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";
// import { PlusLg } from 'react-bootstrap-icons'

import "./SellProduct.css";
import PictPreview from "./PictPreview";
import PictInput from "./PictInput";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    loadingRedux: state.user.isLoading,
  };
};

class SellProduct extends Component {
  constructor() {
    super();
    this.state = {
      pict: [],
      pictPrev: [],
    };
  }

  // coba coba
  inputPictHandler = async (e) => {
    e.preventDefault();

    const file = e.target.files;

    if (file) {
      const files = [...file].map((val) => {
        const reader = new FileReader();
        return new Promise((resolve) => {
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(val);
        });
      });
      const res = await Promise.all(files);
      this.setState({
        pictPrev: [...this.state.pictPrev, ...res],
        pict: [...this.state.pict, ...file],
      });
    }
  };

  deletePictHandler = (index) => {
    // let newPict = [...this.state.pict]
    let newPict = this.state.pict.filter((value, idx) => idx !== index);
    let newPictPrev = this.state.pictPrev.filter((value, idx) => idx !== index);
    this.setState({ pictPrev: newPictPrev, pict: newPict });
  };

  render() {
    return (
      <>
        <Navbar />
        <main className="login-global-container">
          <div className="login-header">
            <div className="login-header-title">Selling Product</div>
            <div className="login-header-info">See your notifications for the latest updates</div>
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
              <input type="text" className="sp-inventory-name-input" placeholder="Name of goods" />
              <input type="text" className="sp-inventory-desc-input" placeholder="Description Product" />
            </div>
            <div className="sp-inventory-container">
              <div className="sp-inventory-title">Item Details</div>
              <input type="text" className="sp-inventory-name-input" placeholder="Unit price" />
              <div className="sp-item-stock-input-container">
                <input type="text" className="sp-inventory-stock-input" placeholder="Unit Stock" />
                <div className="sp-item-stock-pcs">/pcs</div>
              </div>
              <div className="sp-stock-condition">Stock Condition</div>
              <div className="sp-stock-condition-radio-container">
                <label htmlFor="new" className="sp-stock-label">
                  <input type="radio" name="stock" id="new" className="sp-stock-radio" />
                  New Product
                </label>
                <label htmlFor="second" className="sp-stock-label">
                  <input type="radio" name="stock" id="second" className="sp-stock-radio" />
                  Second Product
                </label>
              </div>
              <div className="sp-inventory-title">Photo of Goods</div>
              <div className="sp-photo-container">
                {this.state.pict.length === 1 ? (
                  <>
                    <div className="sp-photo-preview-row">
                      <PictPreview pictPrev={this.state.pictPrev} index={0} deletePictHandler={this.deletePictHandler} />
                      <PictInput inputPictHandler={this.inputPictHandler} />
                    </div>
                  </>
                ) : this.state.pict.length === 2 ? (
                  <>
                    <div className="sp-photo-preview-row">
                      <PictPreview pictPrev={this.state.pictPrev} index={0} deletePictHandler={this.deletePictHandler} />
                      <PictPreview pictPrev={this.state.pictPrev} index={1} deletePictHandler={this.deletePictHandler} />
                      <PictInput inputPictHandler={this.inputPictHandler} />
                    </div>
                  </>
                ) : this.state.pict.length === 3 ? (
                  <>
                    <div className="sp-photo-preview-row">
                      <PictPreview pictPrev={this.state.pictPrev} index={0} deletePictHandler={this.deletePictHandler} />
                      <PictPreview pictPrev={this.state.pictPrev} index={1} deletePictHandler={this.deletePictHandler} />
                      <PictPreview pictPrev={this.state.pictPrev} index={2} deletePictHandler={this.deletePictHandler} />
                    </div>
                    <PictInput inputPictHandler={this.inputPictHandler} />
                  </>
                ) : this.state.pict.length === 4 ? (
                  <>
                    <div className="sp-photo-preview-row">
                      <PictPreview pictPrev={this.state.pictPrev} index={0} deletePictHandler={this.deletePictHandler} />
                      <PictPreview pictPrev={this.state.pictPrev} index={1} deletePictHandler={this.deletePictHandler} />
                      <PictPreview pictPrev={this.state.pictPrev} index={2} deletePictHandler={this.deletePictHandler} />
                    </div>
                    <div className="sp-photo-preview-row">
                      <PictPreview pictPrev={this.state.pictPrev} index={3} deletePictHandler={this.deletePictHandler} />
                      <PictInput inputPictHandler={this.inputPictHandler} />
                    </div>
                  </>
                ) : this.state.pict.length === 5 ? (
                  <>
                    <div className="sp-photo-preview-row">
                      <PictPreview pictPrev={this.state.pictPrev} index={0} deletePictHandler={this.deletePictHandler} />
                      <PictPreview pictPrev={this.state.pictPrev} index={1} deletePictHandler={this.deletePictHandler} />
                      <PictPreview pictPrev={this.state.pictPrev} index={2} deletePictHandler={this.deletePictHandler} />
                    </div>
                    <div className="sp-photo-preview-row">
                      <PictPreview pictPrev={this.state.pictPrev} index={3} deletePictHandler={this.deletePictHandler} />
                      <PictPreview pictPrev={this.state.pictPrev} index={4} deletePictHandler={this.deletePictHandler} />
                    </div>
                  </>
                ) : (
                  <></>
                )}
                {this.state.pict.length !== 0 ? <></> : <PictInput inputPictHandler={this.inputPictHandler} />}
              </div>
              <div className="sp-sell-button">Sell Product</div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps)(SellProduct)
