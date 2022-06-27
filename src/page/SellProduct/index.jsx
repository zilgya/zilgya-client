import React, { Component } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
// import { PlusLg } from 'react-bootstrap-icons'

import "./SellProduct.css";
import PictPreview from "./PictPreview";
import PictInput from "./PictInput";
import { connect } from "react-redux";
import axios from "axios";
import Loading from '../../component/Loading'

const mapStateToProps = (state) => {
  return {
    loadingRedux: state.user.isLoading,
    token: state.auth.token,
  };
};



class SellProduct extends Component {
  constructor() {
    super();
    this.state = {
      pict: [],
      pictPrev: [],
      name: "",
      description: "",
      price: "",
      stock: "",
      stock_condition: "",
      categories_id: "",
      brands_id: "",
      colors_id: "",
      message: "",
      error: "",
      loadingPost: false,
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
      {this.props.loadingRedux&& <Loading/>}
      {this.state.loadingPost&& <Loading/>}
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
              <input
                type="text"
                className="sp-inventory-name-input"
                placeholder="Name of goods"
                onChange={(e) => {
                  this.setState({
                    name: e.target.value,
                  });
                }}
              />
              <textarea
                rows={3}
                type="text"
                className="sp-inventory-desc-input"
                placeholder="Description Product"
                onChange={(e) => {
                  this.setState({
                    description: e.target.value,
                  });
                }}
              />
            </div>
            <div className="sp-inventory-container">
              <div className="sp-inventory-title">Item Details</div>
              <input
                type="text"
                className="sp-inventory-name-input"
                placeholder="Unit price"
                onChange={(e) => {
                  this.setState({
                    price: e.target.value,
                  });
                }}
              />
              <div className="sp-item-stock-input-container">
                <input
                  type="text"
                  className="sp-inventory-stock-input"
                  placeholder="Unit Stock"
                  onChange={(e) => {
                    this.setState({
                      stock: e.target.value,
                    });
                  }}
                />
                <div className="sp-item-stock-pcs">/pcs</div>
              </div>
              <div className="sp-stock-condition">Stock Condition</div>
              <div className="sp-stock-condition-radio-container">
                <label htmlFor="new" className="sp-stock-label">
                  <input
                    type="radio"
                    name="stock"
                    id="new"
                    className="sp-stock-radio"
                    onChange={(e) => {
                      this.setState({
                        stock_condition: e.target.id,
                      });
                    }}
                  />
                  New Product
                </label>
                <label htmlFor="second" className="sp-stock-label">
                  <input
                    type="radio"
                    name="stock"
                    id="second"
                    className="sp-stock-radio"
                    onChange={(e) => {
                      e.preventDefault();
                      this.setState({
                        stock_condition: e.target.id,
                      });
                    }}
                  />
                  Second Product
                </label>
              </div>
              <div className="sp-stock-condition m-0">Category</div>
              <div className="sp-stock-condition-radio-container">
                <Form.Select
                  aria-label="Default select example"
                  className="sp-stock-condition m-0"
                  onChange={(e) => {
                    this.setState({
                      categories_id: e.target.value,
                    });
                  }}
                >
                  <option>Select this product category</option>
                  <option value="1">Table</option>
                  <option value="2">Chair</option>
                  <option value="3">Lamp</option>
                  <option value="4">Sofa</option>
                  <option value="5">Dining Table</option>
                  <option value="6">Refrigerator</option>
                  <option value="7">Bed</option>
                  <option value="8">Bathtub</option>
                  <option value="9">Mirror</option>
                  <option value="10">Cupboard</option>
                </Form.Select>
              </div>
              <div className="sp-stock-condition m-0">Brand</div>
              <div className="sp-stock-condition-radio-container">
                <Form.Select
                  aria-label="Default select example"
                  className="sp-stock-condition m-0"
                  onChange={(e) => {
                    this.setState({
                      brands_id: e.target.value,
                    });
                  }}
                >
                  <option>Select this product brand</option>
                  <option value="1">IKEA</option>
                  <option value="2">Mr. Royal</option>
                  <option value="3">Sweet House</option>
                  <option value="4">North Oxford</option>
                  <option value="5">Mr. Poppin 1929</option>
                </Form.Select>
              </div>
              <div className="sp-stock-condition m-0">Colors</div>
              <div className="sp-stock-condition-radio-container">
                <Form.Select
                  aria-label="Default select example"
                  className="sp-stock-condition m-0"
                  onChange={(e) => {
                    this.setState({
                      colors_id: e.target.value,
                    });
                  }}
                >
                  <option>Select this product color</option>
                  <option value="1">Yellow</option>
                  <option value="2">Brown</option>
                  <option value="3">Purple</option>
                  <option value="4">Black</option>
                  <option value="5">Blue</option>
                  <option value="6">Green</option>
                </Form.Select>
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
              <div
                className="sp-sell-button"
                onClick={() => {
                  const { name, description, price, stock, stock_condition, pict, categories_id, brands_id, colors_id } = this.state;
                  const { token } = this.props;
                  const body = {
                    name,
                    description,
                    price,
                    stock,
                    stock_condition,
                    photo: pict,
                    categories_id,
                    brands_id,
                    colors_id,
                  };
                  const formData = new FormData();
                  for (const key in body) {
                    if (key === "photo") {
                      body[key].map((image) => {
                        return formData.append(key, image);
                      });
                    }
                    formData.append(key, body[key]);
                  }
                  this.setState({loadingPost: true})

                  axios
                    .post(`${process.env.REACT_APP_HOST_API}/product`, formData, { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } })
                    .then((result) => {
                      let x = document.getElementById("snackbar");
                      x.className = "show";
                      setTimeout(function () {
                        x.className = x.className.replace("show", "");
                        window.location.reload();
                      }, 5000);
                      this.setState({
                        error: "",
                        message: result.data.message,
                        loadingPost: false,
                      });
                    })
                    .catch((error) => {
                      let x = document.getElementById("toast");
                      x.className = "show";
                      setTimeout(function () {
                        x.className = x.className.replace("show", "");
                        window.location.reload();
                      }, 5000);
                      this.setState({
                        error: error.response ? error.response.data.error : error.message,
                        message: "",
                        loadingPost: false,
                      });
                    });
                }}
              >
                Sell Product
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <div id="snackbar">{this.state.message}</div>
        {/* <div id="toast">Register Error</div> */}
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div id="toast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-body">{this.state.error}</div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(SellProduct)
