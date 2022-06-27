import React, { Component } from "react";
import axios from "axios";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

import "./Checkout.css";
// import Visa from "../../assets/icons/visa.png";
import Loading from "../../component/Loading";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    loadingRedux: state.user.isLoading,
    users: state.user.userResult,
    token: state.auth.token,
  };
};
class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      phone_number: "",
      order_id: "",
      payment_method: "",
      isPost: false,
      doAxios: false,
    };
  }
  handleCheckout = () => {
    const users_id = this.props.token
    const config = { headers: { Authorization: `Bearer ${users_id}` } }

    const { phone_number, order_id, payment_method } = this.state
    const body = { phone_number, order_id, payment_method }
    //console.log(body)
    axios
      .patch(`${process.env.REACT_APP_HOST_API}/transactions/checkout`, body, config)
      .then(result => {
        console.log(result)
        this.setState({
          isPost: true
        });
      })
      .catch(error => {
        console.log(error)
      })
  }
  componentDidMount() {
    const users_id = this.props.token
    const config = { headers: { Authorization: `Bearer ${users_id}` } }

    axios
      .get(`${process.env.REACT_APP_HOST_API}/transactions/checkout/users`, config)
      .then(result => {
        console.log(result)
        this.setState({
          transactions: result.data.data.data,
        });
      })
      .catch(error => {
        console.log(error)
      })
  }
  componentDidUpdate() {
    if (this.state.doAxios) {
      const users_id = this.props.token
      const config = { headers: { Authorization: `Bearer ${users_id}` } }

      axios
        .get(`${process.env.REACT_APP_HOST_API}/transactions/checkout/users`, config)
        .then(result => {
          console.log(result)
          this.setState({
            transactions: result.data.data.data,
          });
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
  render() {
    // console.log(this.state.transactions)
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
              value={this.props.users.username}
            />
            <input
              type="text"
              name="address"
              id="address"
              className="co-input-name"
              placeholder="Address"
              value={this.props.users.address}
            />
              <input
                type="text"
                className="co-input-name"
                placeholder="Phone Number"
                onChange={(e) => {
                  this.setState({ phone_number: e.target.value });
                }}
              />
            {/* {this.state.transactions.map((transactions) => ( */}
              <select name="orderId" id="orderId" className="co-payment-dropdown" 
              onChange={(e) => {
                this.setState({ order_id: e.target.value });
              }}>
                <option>Please input your transaction data</option>
                {this.state.transactions.length > 0 && 
                this.state.transactions.map((transactions) => (
                <option value={transactions.id}>
                  {transactions.id} || {transactions.name}
                </option>
                ))}
              </select>
            {/* ))} */}

            <select name="payment_method" id="payment_method" className="co-payment-dropdown" 
            onChange={(e) => {
                this.setState({ payment_method: e.target.value });
              }}>
              <option value="Pay with visa">
                 Pay with Visa
              </option>
              <option value="Pay with master card">
                Pay with Master Card
              </option>
              <option value="Pay with bit coin">
                 Pay with Bit Coin
              </option>
            </select>
            <div className="co-button" onClick={this.handleCheckout}>Check Out</div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps)(Checkout);
