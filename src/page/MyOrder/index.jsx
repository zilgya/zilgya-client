import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "react-bootstrap-icons";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import BackToTop from "../../component/ButtonToTop";

import "./MyOrder.css";
import { connect } from "react-redux";
import Loading from "../../component/Loading";
import axios from "axios";
import { Dropdown } from "react-bootstrap";

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    loadingRedux: state.user.isLoading,
    role: Number(state.auth.userInfo.roles_id),
  };
};

class MyOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      error: null,
      role: "buyer",
      roleActive: false,
      isLoading: false,
    };
  }
  async componentDidMount() {
    try {
      const result = await axios.get(`${process.env.REACT_APP_HOST_API}/transactions/users`, { headers: { Authorization: `Bearer ${this.props.token}` } });
      const { data } = result.data;

      this.setState({
        error: null,
        product: data,
        isLoading: false,
        roleActive: false,
      });
    } catch (error) {
      this.setState({
        error: error.response ? error.response.data.err : error.message,
        isLoading: false,
        roleActive: false,
      });
    }
  }

  async componentDidUpdate() {
    if (this.state.roleActive) {
      if (this.state.role === "seller") {
        try {
          const result = await axios.get(`${process.env.REACT_APP_HOST_API}/transactions/seller`, { headers: { Authorization: `Bearer ${this.props.token}` } });
          const { data } = result.data;

          this.setState({
            error: null,
            product: data,
            roleActive: false,
            isLoading: false,
          });
        } catch (error) {
          this.setState({
            error: error.response ? error.response.data.err : error.message,
            isLoading: false,
            roleActive: false,
          });
        }
      }
      if (this.state.role === "buyer") {
        try {
          const result = await axios.get(`${process.env.REACT_APP_HOST_API}/transactions/users`, { headers: { Authorization: `Bearer ${this.props.token}` } });
          const { data } = result.data;

          this.setState({
            error: null,
            product: data,
            isLoading: false,
            roleActive: false,
          });
        } catch (error) {
          this.setState({
            error: error.response ? error.response.data.err : error.message,
            isLoading: false,
            roleActive: false,
          });
        }
      }
    }
  }
  render() {
    return (
      <>
        {this.props.loadingRedux && <Loading />}
        {this.state.isLoading && <Loading />}
        <Navbar />
        <main className="login-global-container">
          <div className="login-header">
            <div className="login-header-title">My Order</div>
            <div className="login-header-info">See your notifications for the latest updates</div>
          </div>
          {this.props.role === 2 ? (
            <div className="profile-seller-navbar">
              <Link to="/profile">
                <div className="profile-seller-navbar-inactive">Profile</div>
              </Link>
              <Link to="/seller/myproduct">
                <div className="profile-seller-navbar-inactive">My Product</div>
              </Link>
              <Link to="/seller/sellproduct">
                <div className="profile-seller-navbar-inactive">Selling Product</div>
              </Link>
              <Link to="/seller/myorder">
                <div className="profile-seller-navbar-active">
                  {" "}
                  <Dropdown className="mo-dropdown">
                    <Dropdown.Toggle id="dropdown-autoclose-true" className="bg-white border-0 mo-nav-dropdown" variant="light">
                      My Order
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="mo-dropdown-menu">
                      <Dropdown.Item className="mo-dropdown-item"
                        onClick={() => {
                          this.setState({
                            role: "buyer",
                            roleActive: true,
                            isLoading: true,
                          });
                        }}
                      >
                        as Customer
                      </Dropdown.Item>
                      <Dropdown.Item className="mo-dropdown-item"
                        onClick={() => {
                          this.setState({
                            role: "seller",
                            roleActive: true,
                            isLoading: true,
                          });
                        }}
                      >
                        as Seller
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Link>
            </div>
          ) : (
            <div className="profile-seller-navbar">
              <Link to="/profile">
                <div className="profile-seller-navbar-inactive">Profile</div>
              </Link>
              <Link to="/seller/myorder">
                <div className="profile-seller-navbar-active">My Order</div>
              </Link>
            </div>
          )}

          <div className="mo-main-content">
            <div className="mo-col-name">
              <div className="mo-col-orderId">ORDER ID</div>
              <div className="mo-col-product">PRODUCTS</div>
              <div className="mo-col-price">PRICE</div>
              <div className="mo-col-quantity">QUANTITY</div>
              <div className="mo-col-status">STATUS ORDER</div>
              <div className="mo-col-total">TOTAL</div>
              <div className="mo-col-orderId">{this.state.role === "buyer" ? "SELLER" : "BUYER"}</div>
            </div>
            <div className="mo-item-container">
              {!this.state.product.length ? (
                <p className="text-center mt-5">No Transaction Found</p>
              ) : (
                this.state.product.length &&
                this.state.product.map((item) => (
                  <div className="mo-product-item">
                    <div className="mo-product-orderId">{item.id}</div>
                    <div className="mo-img-name-container">
                      <div className="mo-img-container">
                        <img src={item.url} alt="product" className="mo-item-img" />
                      </div>
                      <div className="mo-product-name">{item.name}</div>
                    </div>
                    <div className="mo-product-price">{item.price}</div>
                    <div className="mo-product-quantity">{item.quantity}</div>
                    <div className="mo-product-status">
                      <CheckCircle /> {item.order_status}
                    </div>
                    <div className="mo-product-total">{item.total_price}</div>
                    <div className="mo-product-total">{this.state.role === "buyer" ? item.seller : item.buyer}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
        <BackToTop />
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps)(MyOrder);
