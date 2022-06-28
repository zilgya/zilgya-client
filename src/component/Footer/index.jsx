import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="main-wrapper">
          <div className="footer-default section bg-dark pt-5">
            <div className="footer-top-area">
              <div className="row justify-content-between">
                <div className="footer-widget footer-column footer-column__a col-xl-5 col-lg-12 col-md-12 col-sm-6 col-12 text-xl-left mb-40">
                  <div className="inner">
                    <div className="logo">
                      <a href="/">
                        <h1 style={{ color: "white"}}>ZILGYA</h1>
                        {/* <img
                          src="assets/images/logo-white.png"
                          alt="logo white"
                        /> */}
                      </a>
                    </div>
                    <div className="footer-content">
                      <p className="pra">
                        {" "}
                        Donec nunc nunc, gravida vitae diam vel, varius interdum
                        erat. Quisque a nunc vel diam auctor commodo.
                      </p>
                      <div className="footer-social-icon">
                        <a className="facebook" href="# ">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a className="twitter" href="# ">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a className="google" href="# ">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a className="dribbble" href="# ">
                          <i className="fa fa-dribbble"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-widget footer-column footer-column__b col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12 mb-40">
                  <div className="inner">
                    <h4 className="fontWeight400 text-white ft-title">
                      Company
                    </h4>
                    <div className="footer-content">
                      <ul className="quick-link">
                        <li>
                          <a href="# ">
                            <span>About Us</span>
                          </a>
                        </li>
                        <li>
                          <a href="# ">
                            <span>Help Center</span>
                          </a>
                        </li>
                        <li>
                          <a href="# ">
                            <span>Licenses</span>
                          </a>
                        </li>
                        <li>
                          <a href="# ">
                            <span>Market API</span>
                          </a>
                        </li>
                        <li>
                          <a href="# ">
                            <span>Site Map</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-widget footer-column footer-column__b col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12 mb-40">
                  <div className="inner">
                    <h4 className="fontWeight400 text-white ft-title">
                      Userful
                    </h4>
                    <div className="footer-content">
                      <ul className="quick-link">
                        <li>
                          <a href="# ">
                            <span>The Collections</span>
                          </a>
                        </li>
                        <li>
                          <a href="# ">
                            <span>Size Guide</span>
                          </a>
                        </li>
                        <li>
                          <a href="# ">
                            <span>Lookbook</span>
                          </a>
                        </li>
                        <li>
                          <a href="# ">
                            <span>Instagram Shop</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-widget footer-column footer-column__b col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-40">
                  <div className="inner">
                    <h4 className="fontWeight400 text-white ft-title">
                      Contact Us
                    </h4>
                    <div className="footer-content">
                      <div className="address">
                        <p>
                          <span className="list-icon">
                            <i className="fa fa-envelope"></i>
                          </span>{" "}
                          <span className="list-content">
                            info@la-studioweb.com
                          </span>
                        </p>
                        <p>
                          <span className="list-icon">
                            <i className="fa fa-phone"></i>
                          </span>{" "}
                          <span className="list-content">+62.954.954.86</span>
                        </p>
                        <p>
                          <span className="list-icon">
                            <i className="fa fa-clock-o"></i>
                          </span>{" "}
                          <span className="list-content">
                            9:00am - 19:00pm <br /> Monday - Sunday
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-area">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="content text-center">
                    <p>© 2022 ZILGYA Store All rights reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
