import React, { Component } from "react";
import { XLg, Cart as CartIcon } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

// import CartProductOne from '../../assets/img/cart-product-1.png'
// import CartProductTwo from '../../assets/img/cart-product-2.png'

import './Cart.css'
import Loading from '../../component/Loading';
import { connect } from 'react-redux';
import { currencyFormatter } from '../../helper/currencyFormatter';
import { counterDownByIdAction, counterUpByIdAction, deleteCartAction, deleteFromCartAction } from '../../redux/actionCreator/cart';

const mapStateToProps = (state) => {
  const { cart: { cartItem } } = state
  return {
    loadingRedux: state.user.isLoading,
    cartItem,
  };
};

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartItem: [1],
    };
  }
  render() {
    return (
      <React.Fragment>
        {this.props.loadingRedux && <Loading />}
        <Navbar />
        <div className="login-global-container">
          <div className="co-header">
            <div className="cart-header-endpoint">Cart {">"}</div>
            <div className="co-header-title-container">
              <div className="co-header-title">Your Cart</div>
              <div className="co-header-info">
                Buy everything in your cart now!
              </div>
            </div>
          </div>
          {this.props.cartItem.length === 0 ? (
            <main className="cart-container-empty">
              <CartIcon className="cart-icon" />
              <div className="cart-empty-title">Your Cart is Empty </div>
              <Link to="/product" className="link-router-dom">
                <div className="cart-empty-button">Add Product</div>
              </Link>
            </main>
          ) : (
            <main className="cart-container">
              <div className="cart-main-content-left">
                <div className="cart-main-content-left-title">
                  <div className="cart-main-content-left-title-product">
                    PRODUCTS
                  </div>
                  <div className="cart-main-content-left-title-price">
                    PRICE
                  </div>
                  <div className="cart-main-content-left-title-quantity">
                    QUANTITY
                  </div>
                  <div className="cart-main-content-left-title-total">
                    TOTAL
                  </div>
                </div>
                <div className="cart-main-content-left-body">
                  {this.props.cartItem.map((cart) => (
                    <div className="cart-main-product">
                      <div className="cart-main-content-product-delete-img-name">
                        <XLg
                          className="cart-main-content-delete"
                          onClick={() => {
                            this.props.dispatch(deleteFromCartAction(cart.id));
                          }}
                        />
                        <img
                          src={cart.pict.url}
                          alt="product-img"
                          className="cart-main-content-img"
                        />
                        <div className="cart-main-content-product-name">
                          {cart.name}
                        </div>
                      </div>
                      <div className="cart-main-content-product-price">
                        {currencyFormatter.format(cart.price)}
                      </div>
                      <div className="cart-main-content-product-wrapper-quantity">
                        <div
                          className="cart-main-content-plus-minus"
                          onClick={() => {
                            this.props.dispatch(counterDownByIdAction(cart.id));
                          }}
                        >
                          -
                        </div>
                        <div className="cart-main-content-product-quantity">
                          {cart.quantity}
                        </div>
                        <div
                          className="cart-main-content-plus-minus"
                          onClick={() => {
                            this.props.dispatch(counterUpByIdAction(cart.id));
                          }}
                        >
                          +
                        </div>
                      </div>
                      <div className="cart-main-content-product-total">
                        {currencyFormatter.format(cart.price * cart.quantity)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-main-content-left-footer">
                  <div className="cart-main-content-promo">
                    <input
                      type="text"
                      placeholder="Enter your coupon code"
                      className="cart-input-promo"
                    />
                    <div className="cart-apply-promo">Apply Coupon</div>
                  </div>
                  <div className="cart-main-content-clear-update">
                    <div
                      className="cart-clear"
                      onClick={() => {
                        this.props.dispatch(deleteCartAction());
                      }}
                    >
                      Clear Cart
                    </div>
                    <div className="cart-update">
                      <Link to="/product">Update Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-main-content-right">
                <div className="cart-info-container">
                  <div className="cart-right-title">Cart Total</div>
                  <div className="cart-right-item">
                    <div className="cart-right-title">Subtotal</div>
                    <div className="cart-subtotal-body">$125</div>
                  </div>
                  <div className="cart-right-item">
                    <div className="cart-right-title">Shipping</div>
                    <div className="cart-right-input-container">
                      <label htmlFor="rate" className="cart-right-label">
                        <input
                          type="radio"
                          name="shipping"
                          id="rate"
                          className="cart-right-input"
                        />
                        Flat rate: $10
                      </label>
                      <label htmlFor="free" className="cart-right-label">
                        <input
                          type="radio"
                          name="shipping"
                          id="free"
                          className="cart-right-input"
                        />
                        Free Shipping
                      </label>
                      <label htmlFor="pickup" className="cart-right-label">
                        <input
                          type="radio"
                          name="shipping"
                          id="pickup"
                          className="cart-right-input"
                        />
                        Local pickup
                      </label>
                    </div>
                  </div>
                  <div className="cart-right-item">
                    <div className="cart-right-title">Total Price</div>
                    <div className="cart-subtotal-body">$125</div>
                  </div>
                </div>
                <div className="cart-checkout-button">Proceed To Check Out</div>
              </div>
            </main>
          )}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Cart);
