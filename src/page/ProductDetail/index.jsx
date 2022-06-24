import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./productdetail.css";

import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import DescTab from "../../component/DescTab";

import ProductSmallEnam from "../../assets/img/home-product-6.png";
import ProductSmallSatu from "../../assets/img/home-product-1.png";
import Delivery from "../../assets/icons/delivery-fast.png";
import Size from "../../assets/icons/measurement.png";
import Store from "../../assets/icons/pin-check.png";

export class ProductDetail extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main>
          <section>
            <div className="col-md-6 nav-title">
              <p>Shop &gt; Shop Right Sidebar &gt; Product</p>
            </div>
            <div className="d-flex">
              <div className="flex-row col-md-2">
                <div className="col-md-3 p-4 product-small">
                  <img src={ProductSmallSatu} alt="product-small" />
                </div>
                <div className="col-md-3 p-4 product-small">
                  <img src={ProductSmallEnam} alt="product-small" />
                </div>
                <div className="col-md-3 p-4 product-small">
                  <img src={ProductSmallEnam} alt="product-small" />
                </div>
                <div className="col-md-3 p-4 product-small">
                  <img src={ProductSmallSatu} alt="product-small" />
                </div>
              </div>
              <div className="col-md-11 product-big">
                <img src={ProductSmallEnam} alt="product-big" />
              </div>
              <div className="product-label">
                <span className="sale">Hot</span>
              </div>
            </div>
          </section>
          <section>
            <h3 className="p-5 title-product">
              Coaster Home Furnishings Sofa in Oatmeal
            </h3>
            <div className="col-md-6 product-rating-stock">
              <div className="product-dec-rating-reviews">
                <div className="product-dec-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <div className="product-dec-reviews">
                  <p> 2(reviews)</p>
                </div>
              </div>
              <span className="pro-stock">
                <i className="fa fa-checklist"></i>19 Sold / 40 in stock
              </span>
            </div>
            <p className="product-details-price">
              <span className="product-price">$765.99</span>
            </p>
            <div className="product-details-content">
              <p className="product-desc">
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                Quisque a nunc vel diam auctor commodo. Curabitur blandit
                ultrices exurabitur ut magna dignissim, dignissi, Nullam vitae
                venenatis elit. Proin dui lacus, viverra at imperdiet non,
                facilisis eget orci. Vivamus ac elit tellus. Vestibulum nulla
                dui, consequat vitae diam eu, pretium finibus libero. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Aliquam vitae neque tellus.
              </p>
            </div>
          </section>
          <section>
            <div className="pro-details-quality">
              <div className="quantity quantity--2">
                <input
                  type="text"
                  className="quantity-input"
                  name="qty"
                  id="qty-1"
                  defaultValue="1"
                />
                <div className="dec qtybutton">-</div>
                <div className="inc qtybutton">+</div>
                <div className="dec qtybutton">-</div>
                <div className="inc qtybutton">+</div>
              </div>
              <div className="pro-details-cart">
                <p className="btn-hover">Add To Cart</p>
              </div>
              <div className="pro-details-heart">
                <p className="btn-hover">
                  <i className="fa fa-heart-o"></i>
                </p>
              </div>
              <div className="pro-details-wish">
                <p className="btn-hover">Add To Wishlist</p>
              </div>
            </div>
          </section>
          <section className="details-sku">
            <div className="pro-details-sku">
              <span>SKU: D-12525</span>
            </div>
            <div className="pro-details-meta">
              <span>Categories : Furniture, Interior, Chair </span>
            </div>
            <div className="pro-details-meta">
              <span>Tag : Furniture, Chair, Schandanavian, Modern </span>
            </div>
            <div className="pro-details-meta">
              <span>Product ID: 274</span>
            </div>
          </section>
          <section>
            <div className="product-icon-custom">
              <a href="# ">
                {/* eslint-disable-next-line */}
                <img src={Delivery} /> Delivery and Return
              </a>
              <a href="# ">
                {/* eslint-disable-next-line */}
                <img src={Size} /> Size Guide
              </a>
              <a href="# ">
                {/* eslint-disable-next-line */}
                <img src={Store} /> Store availability
              </a>
            </div>
          </section>
          <section>
            <div className="pro-details-social">
              <ul>
                <li>
                  <a className="facebook" href="# ">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="# ">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="google" href="# ">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
              </ul>
              <DescTab />
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
