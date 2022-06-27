import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "react-bootstrap-icons";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import BackToTop from "../../component/ButtonToTop";
import { Modal } from "react-bootstrap";

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
      order_process: "sent",
      isShow: false,
      isShowDelete: false,
      orderId: "",
      orderIdDelete: "",
    };
  }
  async componentDidMount() {
    document.title = "My Order"
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
  handleCompletedTransactions = (id) => {
    // const token = this.props.token
    // const config = { headers: { Authorization: `Bearer ${token}` } }
    this.setState({
      isLoading: true,
    })
    axios
      .patch(`${process.env.REACT_APP_HOST_API}/transactions/completed/${id}`, { headers: { Authorization: `Bearer ${this.props.token}` } })
      .then(result => {
        this.setState({
          isLoading: false,
          roleActive: true,
        })
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 5000);
      }).catch(error => {
        this.setState({
          isLoading: false,
        })
      })
  }
  handleDeleteTransactions = (id) => {
    // const token = this.props.token
    // const config = { headers: { Authorization: `Bearer ${token}` } }
    this.setState({
      isLoading: true,
    })
    axios
      .delete(`${process.env.REACT_APP_HOST_API}/transactions/delete/${id}`, { headers: { Authorization: `Bearer ${this.props.token}` } })
      .then(result => {
        this.setState({
          isLoading: false,
          roleActive: true,
        })
        let x = document.getElementById("toast");
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 5000);
      }).catch(error => {
        this.setState({
          isLoading: false,
        })
      })
  }
  modalTrigger = () => {
    this.setState({ isShow: !this.state.isShowDelete });
  };
  modalTriggerDelete = () => {
    this.setState({ isShowDelete: !this.state.isShowDelete });
  };
  render() {
    // console.log(this.props.token)
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
              <div className="mo-col-orderId">{this.state.order_process === "sent" ? "#" : "SENT"}</div>

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
                    {item.order_status === "SENT" ?
                      <button className="btn btn-success btn-sm"
                        onClick={() => {
                          this.modalTrigger();
                          this.setState({
                            orderId: item.id,
                          })
                        }}>Complete</button>
                      : item.order_status === "COMPLETED" ?
                        <button className="btn btn-danger btn-sm"
                          onClick={() => {
                            this.modalTriggerDelete();
                            this.setState({
                              orderIdDelete: item.id,
                            })
                          }}>Delete</button>
                        : <Link className="btn btn-warning btn-sm" to="/checkout">Checkout</Link>}
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
        <BackToTop />
        <Footer />
        <div className="snackbar-wrapper">
          <div id="snackbar">Data updated !</div>
        </div>
        <div className="toast-container">
          <div id="toast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-body">Data deleted !</div>
          </div>
        </div>
        <Modal show={this.state.isShow} centered>
          <Modal.Header>
            Confirmation
          </Modal.Header>
          <Modal.Body className="modal-body">
            <p className="modal-text" style={{ marginTop: "15px" }}>Are you sure to completed transactions ?</p>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <div className="modal-btn">
              <button className="btn btn-danger" onClick={this.modalTrigger}>
                No
              </button>
              <button className="btn btn-success" style={{ marginLeft: "10px" }}
                onClick={() => {
                  this.handleCompletedTransactions(this.state.orderId)
                  this.setState({
                    isShow: false,
                  })
                }}>
                Yes
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.isShowDelete} centered>
          <Modal.Header>
            Confirmation
          </Modal.Header>
          <Modal.Body className="modal-body">
            <p className="modal-text" style={{ marginTop: "15px" }}>Are you sure to delete transactions ?</p>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <div className="modal-btn">
              <button className="btn btn-danger" onClick={this.modalTriggerDelete}>
                No
              </button>
              <button className="btn btn-success" style={{ marginLeft: "10px" }}
                onClick={() => {
                  this.handleDeleteTransactions(this.state.orderIdDelete)
                  this.setState({
                    isShowDelete: false,
                  })
                }}>
                Yes
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default connect(mapStateToProps)(MyOrder);
