import React, { Component } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

// import icons
import CartIcon from "../../assets/icons/delivery-icon.png";
import WalletIcon from "../../assets/icons/wallet-icon.png";
import BillIcon from "../../assets/icons/bill-icon.png";

import "./Faq.css";
import Loading from "../../component/Loading";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    loadingRedux: state.user.isLoading,
  };
};

class Faq extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.loadingRedux && <Loading />}
        <Navbar />
        <main>
          <div className="co-header">
            <div className="co-header-menu">FAQ {">"}</div>
            <div className="co-header-title-container">
              <div className="co-header-title">FAQ</div>
              <div className="co-header-info">Frequently Asked Questions</div>
            </div>
          </div>
          <div className="faq-main-content">
            <div className="faq-shopping-questions">
              <div className="top-shopping-questions-wrapper">
                <div className="top-faq-icon">
                  <img src={CartIcon} alt="" />
                </div>
                <div className="top-shopping-questions-title">
                  <div className="faq-underline"></div>
                  <div className="faq-title">Shopping Questions</div>
                  <div className="faq-underline"></div>
                </div>
              </div>
              <div className="body-shopping-questions-wrapper">
                <div className="body-shopping-questions">
                  <div className="body-shopping-questions-title">
                    Do you ship worldwide?
                  </div>
                  <div>
                    This is the third article of a three-part series. I’m
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don’t
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </div>
                </div>
                <div className="body-shopping-questions">
                  <div className="body-shopping-questions-title">
                    How can I use a coupon code?
                  </div>
                  <div>
                    This is the third article of a three-part series. I’m
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don’t
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </div>
                </div>
              </div>
              <div className="body-shopping-questions-wrapper">
                <div className="body-shopping-questions">
                  <div className="body-shopping-questions-title">
                    Do you offer gift-vouchers?
                  </div>
                  <div>
                    This is the third article of a three-part series. I’m
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don’t
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </div>
                </div>
                <div className="body-shopping-questions">
                  <div className="body-shopping-questions-title">
                    How can I request a refund?
                  </div>
                  <div>
                    This is the third article of a three-part series. I’m
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don’t
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-shopping-questions">
              <div className="top-shopping-questions-wrapper">
                <div className="top-faq-icon">
                  <img src={WalletIcon} alt="" />
                </div>
                <div className="top-shopping-questions-title">
                  <div className="faq-underline"></div>
                  <div className="faq-title">Payment Questions</div>
                  <div className="faq-underline"></div>
                </div>
              </div>
              <div className="body-shopping-questions-wrapper">
                <div className="body-shopping-questions">
                  <div className="body-shopping-questions-title">
                    Do you ship worldwide?
                  </div>
                  <div>
                    This is the third article of a three-part series. I’m
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don’t
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </div>
                </div>
                <div className="body-shopping-questions">
                  <div className="body-shopping-questions-title">
                    How can I use a coupon code?
                  </div>
                  <div>
                    This is the third article of a three-part series. I’m
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don’t
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </div>
                </div>
              </div>
              <div className="body-shopping-questions-wrapper">
                <div className="body-shopping-questions">
                  <div className="body-shopping-questions-title">
                    Do you offer gift-vouchers?
                  </div>
                  <div>
                    This is the third article of a three-part series. I’m
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don’t
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </div>
                </div>
                <div className="body-shopping-questions">
                  <div className="body-shopping-questions-title">
                    How can I request a refund?
                  </div>
                  <div>
                    This is the third article of a three-part series. I’m
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don’t
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-shopping-questions">
              <div className="top-shopping-questions-wrapper">
                <div className="top-faq-icon">
                  <img src={BillIcon} alt="" />
                </div>
                <div className="top-shopping-questions-title">
                  <div className="faq-underline"></div>
                  <div className="faq-title">Miscellaneous Questions</div>
                  <div className="faq-underline"></div>
                </div>
              </div>
              <div className="body-shopping-questions-wrapper">
                <div className="body-shopping-questions">
                  <div className="body-shopping-questions-title">
                    Do you ship worldwide?
                  </div>
                  <div>
                    This is the third article of a three-part series. I’m
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don’t
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </div>
                </div>
                <div className="body-shopping-questions">
                  <div className="body-shopping-questions-title">
                    How can I use a coupon code?
                  </div>
                  <div>
                    This is the third article of a three-part series. I’m
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don’t
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </div>
                </div>
              </div>
              <div className="body-shopping-questions-wrapper">
                <div className="body-shopping-questions">
                  <div className="body-shopping-questions-title">
                    Do you offer gift-vouchers?
                  </div>
                  <div>
                    This is the third article of a three-part series. I’m
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don’t
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </div>
                </div>
                <div className="body-shopping-questions">
                  <div className="body-shopping-questions-title">
                    How can I request a refund?
                  </div>
                  <div>
                    This is the third article of a three-part series. I’m
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don’t
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-footer">
            <div className="main-footer-title">You Still Need Help?</div>
            <div className="button-contact">Contact Us</div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Faq);
