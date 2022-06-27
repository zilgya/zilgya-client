import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./productdetail.css";

import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import DescTab from "../../component/DescTab";
import BackToTop from "../../component/ButtonToTop";

import ProductSmallEnam from "../../assets/img/home-product-6.png";
// import ProductSmallSatu from "../../assets/img/home-product-1.png";
import Delivery from "../../assets/icons/delivery-fast.png";
import Size from "../../assets/icons/measurement.png";
import Store from "../../assets/icons/pin-check.png";
import Loading from "../../component/Loading";
import { connect } from "react-redux";
import withParams from "../../helper/withParams";
import axios from "axios";
import { currencyFormatter } from "../../helper/currencyFormatter";
import { addToCartAction } from "../../redux/actionCreator/cart";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  const {
    cart: { cartItem },
    auth: { token },
  } = state;

  return {
    loadingRedux: state.user.isLoading,
    cartItem,
    token,
  };
};

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      pict: [],
      wishlist: [],
      successAddtoWishlist: false,
      pictPrev: "",
      quantity: 1,
      loadingWishlist: false,
      wishlistMessage: false,
    };
  }
  handleAddtoWishlist = () => {
    const { params, token } = this.props;
    this.setState({
      loadingWishlist: true,
      successAddtoWishlist: false,
    });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_HOST_API}/wishlist`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        product_id: params.id,
      },
    })
      .then((result) => {
        this.setState({
          loadingWishlist: false,
          successAddtoWishlist: true,
          wishlistMessage: result.data.message,
        });
        console.log(result.data.message);
      })
      .catch((error) => {
        this.setState({
          loadingWishlist: false,
          successAddtoWishlist: false,
          wishlistMessage: false,
        });
        console.log(error);
      });
  };

  handleGetWishlist = () => {
    const { token, params } = this.props;
    this.setState({
      loadingWishlist: true,
      successAddtoWishlist: false,
    });
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_HOST_API}/wishlist/${params.id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log(result.data, "ini dari wishlist");
        this.setState({
          wishlistMsg: result.data.message,
          loadingWishlist: false,
          successAddtoWishlist: false,
        });
      })
      .catch((error) => {
        token.setState({ loadingWishlist: false, successAddtoWishlist: false });
        console.error(error);
      });
  };

  deleteFromServer = (w_id) => {
    this.setState({
      loadingWishlist: true,
      successAddtoWishlist: false,
    });
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_HOST_API}/wishlist/${w_id}`,
      headers: {
        Authorization: `Bearer ${this.props.token}`,
      },
    })
      .then((result) => {
        this.setState({
          loadingWishlist: false,
          successAddtoWishlist: true,
        });
        console.log(`${result.data.message} ${w_id}`);
        // setDelMsg(result.data.message);
      })
      .catch((error) => {
        this.setState({
          loadingWishlist: false,
          successAddtoWishlist: false,
        });
        console.error(error);
      });
  };

  componentDidMount() {
    window.scroll({ top: 0 });
    const { params } = this.props;
    axios
      .get(`${process.env.REACT_APP_HOST_API}/product/${params.id}`)
      .then((result) => {
        this.setState({
          product: result.data.data,
        });
        console.log(this.state.product);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${process.env.REACT_APP_HOST_API}/product/images/${params.id}`)
      .then((result) => {
        this.setState({
          pict: result.data.data,
        });
        console.log(this.state.pict);
      })
      .catch((error) => {
        console.log(error);
      });

    this.handleGetWishlist();
  }
  componentDidUpdate() {
    if (this.state.successAddtoWishlist) {
      this.handleGetWishlist();
    }
  }

  render() {
    return (
      <>
        {this.props.loadingRedux && <Loading />}
        {this.state.loadingWishlist && <Loading />}
        <Navbar />
        <main>
          <section>
            <div className="nav-title">
              <p>
                <Link to="/product"> Shop</Link> &gt; {this.state.product.name}
              </p>
            </div>
            <div className="protail-pict-container">
              <div className="protail-small-pict-container">
                {this.state.pict.map((pict, idx) => (
                  <div
                    className="protail-small"
                    key={idx}
                    onClick={() => {
                      this.setState({
                        pictPrev: pict.url,
                      });
                    }}
                  >
                    <img
                      src={pict.url}
                      alt={`product${idx + 1}`}
                      className="protail-small-img"
                    />
                  </div>
                ))}
              </div>
              <div className="protail-big-pict-container">
                {this.state.pictPrev !== "" ? (
                  <img src={this.state.pictPrev} alt="product-preview" />
                ) : (
                  // <div className="product-big-prev">Click image to preview</div>
                  <img
                    src={this.state.pict.length && this.state.pict[0].url}
                    alt="product-preview"
                  />
                )}
              </div>
            </div>
          </section>
          <section>
            <h3 className="p-5 title-product">{this.state.product.name}</h3>
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
                <i className="fa fa-checklist"></i>
                {Math.ceil(this.state.product.stock / 2)} Sold /{" "}
                {this.state.product.stock} in stock
              </span>
            </div>
            <p className="product-details-price">
              <span className="product-price">
                {currencyFormatter.format(this.state.product.price)}
              </span>
            </p>
            <div className="product-details-content">
              <p className="product-desc">{this.state.product.description}</p>
            </div>
          </section>
          <section className="protail-button-container">
            <div className="pro-details-quality">
              <div className="quantity quantity--2">
                <div
                  className="dec qtybutton"
                  onClick={() => {
                    if (this.state.quantity > 1)
                      this.setState({ quantity: this.state.quantity - 1 });
                  }}
                >
                  -
                </div>
                <div className="quantity-input">{this.state.quantity}</div>
                <div
                  className="inc qtybutton"
                  onClick={() => {
                    this.setState({ quantity: this.state.quantity + 1 });
                  }}
                >
                  +
                </div>
              </div>
            </div>
            <div className="protail-button-cart-wish-container">
              <div
                className="pro-details-cart"
                onClick={() => {
                  const { product, pict, quantity } = this.state;
                  this.props.dispatch(
                    addToCartAction(
                      this.props.params.id,
                      product.name,
                      pict[0],
                      quantity,
                      product.price
                    )
                  );
                  let x = document.getElementById("snackbar");
                  x.className = "show";
                  setTimeout(function () {
                    x.className = x.className.replace("show", "");
                  }, 2000);
                }}
              >
                Add To Cart
              </div>
              <div className="pro-details-heart d-none">
                <p className="btn-hover">
                  <i className="fa fa-heart-o"></i>
                </p>
              </div>
              {this.state.wishlistMsg === "Product can be added to wishlist" ? (
                <div
                  className="pro-details-wish"
                  onClick={() => this.handleAddtoWishlist()}
                >
                  Add To Wishlist
                </div>
              ) : this.state.successAddtoWishlist === true ? (
                <div className="pro-details-wish">
                  <div
                    className="btn-hover"
                    style={{ backgroundColor: "#d94141", color: "#fff" }}
                  >
                    Remove from wishlist
                  </div>
                </div>
              ) : this.state.wishlistMsg === "Already on wishlist" ? (
                <div
                  className="pro-details-wish"
                  style={{ backgroundColor: "#d94141", color: "#fff" }}
                  onClick={() => {
                    this.deleteFromServer(this.props.params.id);
                  }}
                >
                  Remove from wishlist
                </div>
              ) : (
                <></>
              )}
            </div>
          </section>
          <section className="details-sku">
            <div className="pro-details-sku">
              <span>Brand : {this.state.product.brand}</span>
            </div>
            <div className="pro-details-meta">
              <span>Categories : {this.state.product.category} </span>
            </div>
            <div className="pro-details-meta">
              <span>Color : {this.state.product.color} </span>
            </div>
            <div className="pro-details-meta">
              <span>Product ID: {this.props.params.id}</span>
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
              <section className="protail-related-product">
                <h1 className="text-center title-related ">Related Product</h1>
                <div className="d-flex d-flex justify-content-around">
                  <div className="flex-row d-flex justify-content-center related-content">
                    <div className="col-md-4">
                      <img src={ProductSmallEnam} alt="related-product" />
                      <h4 className="font-related">
                        Coaster 506222-CO Loveseat
                      </h4>
                      <p className="p-related">$765.99</p>
                    </div>
                    <div className="p-2 padd-rspn"></div>
                    <div className="col-md-4">
                      <img src={ProductSmallEnam} alt="related-product" />
                      <h4 className="font-related">
                        Coaster 506222-CO Loveseat
                      </h4>
                      <p className="p-related">$765.99</p>
                    </div>
                    <div className="p-2 padd-rspn"></div>
                    <div className="col-md-4">
                      <img src={ProductSmallEnam} alt="related-product" />
                      <h4 className="font-related">
                        Coaster 506222-CO Loveseat
                      </h4>
                      <p className="p-related">$765.99</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </main>
        <BackToTop />
        <Footer />
        <div className="snackbar-wrapper">
          <div id="snackbar">Product added</div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(withParams(ProductDetail));
