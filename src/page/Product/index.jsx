import React, { useState } from "react";
import Navbar from "../../component/Navbar/index";
import Footer from "../../component/Footer/index";
import CardProducts from "./CardProducts";

import "./Product.css";

const Product = () => {
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [totalCategory, setTotalCat] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [filterPrice, setFilterPrice] = useState(false);

  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });
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
            {totalCategory.length &&
              totalCategory.map((val, i) => (
                <div className="pd-main-content-category-value" key={i}>
                  <div
                    className={category === val.category ? "pd-main-content-category-value-right-active" : "pd-main-content-category-value-right"}
                    onClick={() => {
                      setCategory(val.category);
                    }}
                  >
                    {val.category}
                  </div>
                  <div className="pd-main-content-category-value-left">{val.total}</div>
                </div>
              ))}
          </div>
          <div className="pd-price-left-content">
            <div className="pd-category-title">Price</div>
            <label htmlFor="price-range">
              Min.price <br /> IDR{formatter.format(minPrice).split("Rp")[1]}
            </label>
            <br />
            <input
              type="range"
              name="price-range"
              id="price-range"
              max="20000000"
              min="0"
              step="1000"
              defaultValue="0"
              onChange={(e) => {
                setMinPrice(e.target.value);
              }}
            />
            <br />
            <label htmlFor="price-range">
              Max.price <br /> IDR{formatter.format(maxPrice).split("Rp")[1]}
            </label>
            <br />
            <input
              type="range"
              name="price-range"
              id="price-range"
              max="20000000"
              min="0"
              step="1000"
              defaultValue="0"
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
            />
          </div>
          <div className="pd-brand-left-content">
            <div className="pd-category-title">Brands</div>
            <div className="input-brands-left-content">
              <input
                type="checkbox"
                name="ikea"
                id="ikea"
                className="product-brand-input"
                checked={brand === "ikea"}
                onClick={() => {
                  setBrand("ikea");
                }}
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
                checked={brand === "mr. royal"}
                onClick={() => {
                  setBrand("mr. royal");
                }}
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
                checked={brand === "sweet house"}
                onClick={() => {
                  setBrand("sweet house");
                }}
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
                checked={brand === "north oxford"}
                onClick={() => {
                  setBrand("north oxford");
                }}
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
                checked={brand === "mr. poppin 1929"}
                onClick={() => {
                  setBrand("mr. poppin 1929");
                }}
              />
              <label htmlFor="mr-poppin" className="product-brand-label">
                Mr. Poppin 1929
              </label>
            </div>
            <button
              className="pd-button-filter mt-3"
              onClick={() => {
                setFilterPrice(true);
              }}
            >
              FILTER
            </button>
            <button
              className="pd-button-reset mt-3"
              onClick={() => {
                window.location.reload();
              }}
            >
              RESET
            </button>
          </div>
        </aside>
        <aside className="pd-main-content-right">
          <header className="pd-main-header-right">
            <div>
              Showing {totalProduct ? 1 : 0}-{totalProduct < 12 ? totalProduct : 12} of {totalProduct ? totalProduct : 0} Results
            </div>
            <nav className="sort-menu">
              <ul>
                <li>
                  <p>Sort by</p>
                  <ul className="sub-sort-menu">
                    <li
                      className="sort-value"
                      onClick={() => {
                        setSort("name");
                        setOrder("asc");
                      }}
                    >
                      <p>Name</p>
                    </li>
                    <li
                      className="sort-value"
                      onClick={() => {
                        setOrder("desc");
                        setSort("created_at");
                      }}
                    >
                      <p>New Items</p>
                    </li>
                    <li
                      className="sort-value"
                      onClick={() => {
                        setOrder("asc");
                        setSort("price");
                      }}
                    >
                      <p>Cheapest</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </header>

          <CardProducts sort={sort} order={order} brand={brand} setTotalCat={setTotalCat} category={category} minPrice={minPrice} maxPrice={maxPrice} filterPrice={filterPrice} setTotalProduct={setTotalProduct} />
        </aside>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Product;
