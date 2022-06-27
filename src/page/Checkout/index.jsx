import React, { Component } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import BackToTop from "../../component/ButtonToTop";

import "./Checkout.css";
import Visa from "../../assets/icons/visa.png";
import Loading from "../../component/Loading";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    loadingRedux: state.user.isLoading,
  };
};

class Checkout extends Component {
  render() {
    return (
      <>
        {this.props.loadingRedux && <Loading />}
        <Navbar />
        <main className="login-global-container">
          <div className="co-header">
            <div className="co-header-menu">Cart {">"} Checkout</div>
            <div className="co-header-title-container">
              <div className="co-header-title">Check Out</div>
              <div className="co-header-info">
                Pay and get your ordered items
              </div>
            </div>
          </div>
          <div className="co-main-content">
            <div className="co-main-title">Self Information</div>
            <input
              type="text"
              name="name"
              id="name"
              className="co-input-name"
              placeholder="Your Name"
            />
            <input
              type="text"
              name="address"
              id="address"
              className="co-input-name"
              placeholder="Address"
            />
            <div className="co-phone-number-container">
              <select name="number" id="number" className="co-number-dropdown">
                <option value="+62">+62</option>
              </select>
              <input
                type="text"
                className="co-input-phone-number"
                placeholder="Phone Number"
              />
            </div>
            <select name="payment" id="payment" className="co-payment-dropdown">
              <option value="visa">
                <img src={Visa} alt="visa" /> Pay with Visa
              </option>
              <option value="visa">
                <img src={Visa} alt="visa" /> Pay with Master Card
              </option>
              <option value="visa">
                <img src={Visa} alt="visa" /> Pay with Bit Coin
              </option>
            </select>
            <div className="co-button">Check Out</div>
          </div>
        </main>
        <BackToTop />
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps)(Checkout);
