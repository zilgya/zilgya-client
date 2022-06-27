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
import { Button, Modal } from "react-bootstrap";

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
      show: false,
      setShow: false,
      promoCode: "",
      promos: {},
      error: "",
      discount: 0,
      isPromo: false,
    };
  }
  handlePostTransaction = () => {
    const { shipping } = this.state;
    const { cartItem } = this.props;

    const total_price = this.state.sub_total + Number(shipping);

    const users_id = this.props.token;
    const config = { headers: { Authorization: `Bearer ${users_id}` } };

    const body = { sub_total: this.state.sub_total, shipping, total_price, product: cartItem, promo_id: this.state.promos ? this.state.promos.id : null };
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

  handleClose = () => this.setState({ setShow: false, show: false });
  handleShow = () => {
    const { shipping } = this.state;
    if (!shipping) {
      let x = document.getElementById("toast");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 10000);
      return;
    }
    this.setState({ setShow: true, show: true });
  };

  componentDidMount() {
    const { cartItem } = this.props;
    if (cartItem.length > 0) {
      const sub_total = cartItem.map((item) => item.quantity * item.price).reduce((b, a) => b + a);
      this.setState({ sub_total });
    }
  }
  componentDidUpdate() {
    if (this.state.qty) {
      let sub_total;
      const { cartItem } = this.props;
      if (cartItem.length > 0) {
        sub_total = cartItem.map((item) => item.quantity * item.price).reduce((b, a) => b + a);
        this.setState({ sub_total });
        this.setState({
          qty: false,
        });
      }
      if (!cartItem.length) {
        this.setState({
          qty: false,
        });
      }
      const { discount } = this.state.promos;
      const newPrice = sub_total * (Number(discount) / 100);
      this.setState({
        discount: newPrice,
        isPromo: false,
      });
    }
    if (this.state.isPromo) {
      const { discount } = this.state.promos;
      const newPrice = this.state.sub_total * (Number(discount) / 100);
      this.setState({
        discount: newPrice,
        isPromo: false,
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
                    <input
                      type="text"
                      placeholder="Enter your coupon code"
                      className="cart-input-promo"
                      onChange={(e) => {
                        this.setState({
                          promoCode: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="cart-apply-promo"
                      onClick={() => {
                        if (!this.state.promoCode) {
                          this.setState({
                            error: "Please input your coupon code",
                          });
                          let x = document.getElementById("toast");
                          x.className = "show";
                          setTimeout(function () {
                            x.className = x.className.replace("show", "");
                          }, 1000);
                          return;
                        }
                        axios
                          .get(`${process.env.REACT_APP_HOST_API}/promo/${this.state.promoCode}`)
                          .then((result) => {
                            this.setState({
                              isPromo: true,
                              promos: result.data.data,
                            });
                            let x = document.getElementById("snackbar");
                            x.className = "show";
                            setTimeout(function () {
                              x.className = x.className.replace("show", "");
                            }, 2500);
                          })
                          .catch((error) => {
                            this.setState({
                              error: error.response ? error.response.data.err : error.message,
                            });
                            let x = document.getElementById("toast");
                            x.className = "show";
                            setTimeout(function () {
                              x.className = x.className.replace("show", "");
                            }, 1000);
                          });
                      }}
                    >
                      Apply Coupon
                    </div>
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
                    <div className="cart-right-title">Discount</div>
                    <div className="cart-subtotal-body">- {currencyFormatter.format(this.state.discount)}</div>
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
                        Flat rate : 100k
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
                    <div className="cart-subtotal-body">{currencyFormatter.format(this.state.sub_total + Number(this.state.shipping) - this.state.discount)}</div>
                  </div>
                </div>
                <div className="cart-checkout-button" onClick={this.handleShow}>
                  Proceed To Check Out
                </div>
              </div>
            </main>
          )}
        </div>
        <Footer />
        <div className="snackbar-wrapper">
          <div id="snackbar">Promo Added</div>
        </div>
        <div className="toast-container">
          <div id="toast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-body">{this.state.error}</div>
          </div>
        </div>
        <Modal backdrop="static" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="cart-modal-title">Warning !</Modal.Title>
          </Modal.Header>
          <Modal.Body className="cart-modal-body">Do you want to checkout this product?</Modal.Body>
          <Modal.Footer>
            <Link to="/product">
              <Button className="cart-button-add-product" onClick={this.handleClose}>
                Add More Product
              </Button>
            </Link>
            <Link to="/checkout">
              <Button className="cart-button-proceed" onClick={this.handlePostTransaction}>
                Proceed
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Cart);
