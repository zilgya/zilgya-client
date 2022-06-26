import React, { Component } from "react";
import axios from "axios";
import { XLg, Cart as CartIcon } from "react-bootstrap-icons";
import { Link, Navigate } from "react-router-dom";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

// import CartProductOne from '../../assets/img/cart-product-1.png'
// import CartProductTwo from '../../assets/img/cart-product-2.png'

import "./Cart.css";
import Loading from "../../component/Loading";
import { connect } from "react-redux";
import { currencyFormatter } from "../../helper/currencyFormatter";
import { counterDownByIdAction, counterUpByIdAction, deleteCartAction, deleteFromCartAction } from "../../redux/actionCreator/cart";

const mapStateToProps = (state) => {
  const {
    cart: { cartItem },
  } = state;
  return {
    loadingRedux: state.user.isLoading,
    cartItem,
    users: state.user.userResult,
    token: state.auth.token,
  };
};

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      shipping: "",
      sub_total: 0,
      total_price: 0,
      qty: false,
      isPost: false,
    };
  }
  handlePostTransaction = () => {
    const { shipping } = this.state;
    const { cartItem } = this.props;

    if (!shipping) {
      let x = document.getElementById("toast");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 10000);

      return;
    }

    // const product_id = cartItem.length > -1 && cartItem[0].id
    const quantity = cartItem.length > -1 && cartItem[0].quantity;
    const price = cartItem.length > -1 && cartItem[0].price;
    // console.log(product_id, product_qty, product_price)

    const sub_total = price * quantity;
    const total_price = sub_total + Number(shipping);

    const users_id = this.props.token;
    const config = { headers: { Authorization: `Bearer ${users_id}` } };

    const body = { sub_total, shipping, total_price, product: cartItem };
    // console.log(users_id)
    axios
      .post(`${process.env.REACT_APP_HOST_API}/transactions`, body, config)
      .then((result) => {
        console.log(result);
        this.props.dispatch(deleteCartAction());
        this.setState({
          isPost: true,
        });
        // let x = document.getElementById("better");
        // x.className = "show";
        // setTimeout(function () {
        //   x.className = x.className.replace("show", "");
        // }, 10000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    const { cartItem } = this.props;
    const sub_total = cartItem.length && cartItem.map((item) => item.quantity * item.price).reduce((b, a) => b + a);
    this.setState({ sub_total });
  }
  componentDidUpdate() {
    if (this.state.qty) {
      const { cartItem } = this.props;
      const sub_total = cartItem.map((item) => item.quantity * item.price).reduce((b, a) => b + a);
      this.setState({ sub_total });
      this.setState({
        qty: false,
      });
    }
  }
  render() {
    //console.log(this.state.sub_total)
    // const { cartItem } = this.props
    if (this.state.isPost) {
      return <Navigate to="/checkout" />;
    }
    return (
      <React.Fragment>
        {this.props.loadingRedux && <Loading />}
        <Navbar />
        <div className="login-global-container">
          <div className="co-header">
            <div className="cart-header-endpoint">Cart {">"}</div>
            <div className="co-header-title-container">
              <div className="co-header-title">Your Cart</div>
              <div className="co-header-info">Buy everything in your cart now!</div>
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
                  <div className="cart-main-content-left-title-product">PRODUCTS</div>
                  <div className="cart-main-content-left-title-price">PRICE</div>
                  <div className="cart-main-content-left-title-quantity">QUANTITY</div>
                  <div className="cart-main-content-left-title-total">TOTAL</div>
                </div>
                <div className="cart-main-content-left-body">
                  {this.props.cartItem.map((cart) => (
                    <div className="cart-main-product">
                      <div className="cart-main-content-product-delete-img-name">
                        <XLg
                          className="cart-main-content-delete"
                          onClick={() => {
                            this.props.dispatch(deleteFromCartAction(cart.id));
                            this.setState({
                              qty: true,
                            });
                          }}
                        />
                        <img src={cart.pict.url} alt="product-img" className="cart-main-content-img" />
                        <div className="cart-main-content-product-name">{cart.name}</div>
                      </div>
                      <div className="cart-main-content-product-price">{currencyFormatter.format(cart.price)}</div>
                      <div className="cart-main-content-product-wrapper-quantity">
                        <div
                          className="cart-main-content-plus-minus"
                          onClick={() => {
                            if (cart.quantity > 1) {
                              this.props.dispatch(counterDownByIdAction(cart.id));
                              this.setState({
                                qty: true,
                              });
                            }
                          }}
                        >
                          -
                        </div>
                        <div className="cart-main-content-product-quantity">{cart.quantity}</div>
                        <div
                          className="cart-main-content-plus-minus"
                          onClick={() => {
                            this.props.dispatch(counterUpByIdAction(cart.id));
                            this.setState({
                              qty: true,
                            });
                          }}
                        >
                          +
                        </div>
                      </div>
                      <div className="cart-main-content-product-total">{currencyFormatter.format(cart.price * cart.quantity)}</div>
                    </div>
                  ))}
                </div>
                <div className="cart-main-content-left-footer">
                  <div className="cart-main-content-promo">
                    <input type="text" placeholder="Enter your coupon code" className="cart-input-promo" />
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
                    <div className="cart-subtotal-body">{currencyFormatter.format(this.state.sub_total)}</div>
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
                          onChange={() => {
                            this.setState({ shipping: "100000" });
                          }}
                        />
                        Flat rate: $10
                      </label>
                      <label htmlFor="free" className="cart-right-label">
                        <input
                          type="radio"
                          name="shipping"
                          id="free"
                          className="cart-right-input"
                          onChange={() => {
                            this.setState({ shipping: "0" });
                          }}
                        />
                        Free Shipping
                      </label>
                      <label htmlFor="pickup" className="cart-right-label">
                        <input
                          type="radio"
                          name="shipping"
                          id="pickup"
                          className="cart-right-input"
                          onChange={() => {
                            this.setState({ shipping: "0" });
                          }}
                        />
                        Local pickup
                      </label>
                    </div>
                  </div>
                  <div className="cart-right-item">
                    <div className="cart-right-title">Total Price</div>
                    <div className="cart-subtotal-body">{currencyFormatter.format(this.state.sub_total + Number(this.state.shipping))}</div>
                  </div>
                </div>
                <div className="cart-checkout-button" onClick={this.handlePostTransaction}>
                  Proceed To Check Out
                </div>
              </div>
            </main>
          )}
        </div>
        <Footer />
        <div className="toast-container">
          <div id="toast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-body">Please input shipping !{/* nambah komen buat push */}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Cart);
