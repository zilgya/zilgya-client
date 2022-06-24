import React, { Component } from "react";
import Navbar from "../../component/Navbar/index";
import Footer from "../../component/Footer/index";
import CardProducts from "./CardProducts";

import "./Product.css";
class Product extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <header className="pd-banner-wrapper">
          <section className="pd-banner-img-background">
            <div className="pd-banner-content-header">
              <p>Shop {">"} Shop Right Sidebar</p>
            </div>
            <div className="pd-banner-content-body">
              <h1>Let's Shopping</h1>
              <p>Find and buy the one you like</p>
            </div>
          </section>
        </header>
        <main className="container-main-content">
          <aside className="pd-main-content-left">
            <div className="pd-category-left-content">
              <div className="pd-category-title">Categories</div>
              <div className="pd-main-content-category-value">
                <div className="pd-main-content-category-value-right">
                  Table
                </div>
                <div className="pd-main-content-category-value-left">5</div>
              </div>
              <div className="pd-main-content-category-value">
                <div className="pd-main-content-category-value-right">
                  Chair
                </div>
                <div className="pd-main-content-category-value-left">5</div>
              </div>
              <div className="pd-main-content-category-value">
                <div className="pd-main-content-category-value-right">Lamp</div>
                <div className="pd-main-content-category-value-left">5</div>
              </div>
              <div className="pd-main-content-category-value">
                <div className="pd-main-content-category-value-right">Sofa</div>
                <div className="pd-main-content-category-value-left">5</div>
              </div>
              <div className="pd-main-content-category-value">
                <div className="pd-main-content-category-value-right">
                  Dining Table
                </div>
                <div className="pd-main-content-category-value-left">5</div>
              </div>
              <div className="pd-main-content-category-value">
                <div className="pd-main-content-category-value-right">
                  Refrigerator
                </div>
                <div className="pd-main-content-category-value-left">5</div>
              </div>
              <div className="pd-main-content-category-value">
                <div className="pd-main-content-category-value-right">Bed</div>
                <div className="pd-main-content-category-value-left">5</div>
              </div>
              <div className="pd-main-content-category-value">
                <div className="pd-main-content-category-value-right">
                  Bathtub
                </div>
                <div className="pd-main-content-category-value-left">5</div>
              </div>
              <div className="pd-main-content-category-value">
                <div className="pd-main-content-category-value-right">
                  Mirror
                </div>
                <div className="pd-main-content-category-value-left">5</div>
              </div>
              <div className="pd-main-content-category-value">
                <div className="pd-main-content-category-value-right">
                  Cupboard
                </div>
                <div className="pd-main-content-category-value-left">5</div>
              </div>
            </div>
            <div className="pd-price-left-content">
              <div className="pd-category-title">Price</div>
              <p>Price $39 - $159</p>
              <button className="pd-button-filter">FILTER</button>
            </div>
            <div className="pd-brand-left-content">
              <div className="pd-category-title">Brands</div>
              <div className="input-brands-left-content">
                <input
                  type="checkbox"
                  name="ikea"
                  id="ikea"
                  className="product-brand-input"
                />
                <label htmlFor="ikea" className="product-brand-label">
                  IKEA
                </label>
              </div>
              <div className="input-brands-left-content">
                <input
                  type="checkbox"
                  name="mr-royal"
                  id="mr-royal"
                  className="product-brand-input"
                />
                <label htmlFor="mr-royal" className="product-brand-label">
                  Mr. Royal
                </label>
              </div>
              <div className="input-brands-left-content">
                <input
                  type="checkbox"
                  name="sweet-house"
                  id="sweet-house"
                  className="product-brand-input"
                />
                <label htmlFor="sweet-house" className="product-brand-label">
                  Sweet House
                </label>
              </div>
              <div className="input-brands-left-content">
                <input
                  type="checkbox"
                  name="north-oxford"
                  id="north-oxford"
                  className="product-brand-input"
                />
                <label htmlFor="north-oxford" className="product-brand-label">
                  North Oxford
                </label>
              </div>
              <div className="input-brands-left-content">
                <input
                  type="checkbox"
                  name="mr-poppin"
                  id="mr-poppin"
                  className="product-brand-input"
                />
                <label htmlFor="mr-poppin" className="product-brand-label">
                  Mr. Poppin 1929
                </label>
              </div>
            </div>
          </aside>
          <aside className="pd-main-content-right">
            <header className="pd-main-header-right">
              <div>Showing 1-16 of 39 Results</div>
              <nav className="sort-menu">
                <ul>
                  <li>
                    <p>Sort by</p>
                    <ul className="sub-sort-menu">
                      <li>
                        <p>Price</p>
                      </li>
                      <li>
                        <p>New Items</p>
                      </li>
                      <li>
                        <p>Cheapest</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </header>
            <div className="card-wrapper row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
              <CardProducts />
              <CardProducts />
              <CardProducts />
              <CardProducts />
            </div>
          </aside>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Product;
