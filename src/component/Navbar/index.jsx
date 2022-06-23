import React, { Component } from "react";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <header className="container">
          <div className="header-absolute">
            <div className="header-default menu-right height-150 d-flex align-items-center">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-6 col-md-6 col-4">
                    <div className="logo">
                      {/* <a href="/"><img src=" " alt="logo"/></a> */}
                      <h1>ZILGYA</h1>
                    </div>
                  </div>
                  <div className="col-xl-6 d-none d-xl-block">
                    <div className="menu-center d-flex justify-content-center">
                      <nav className="main-menu">
                        <ul>
                          <li>
                            <a href="# ">Home</a>
                          </li>
                          <li>
                            <a href="# ">Pages</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="# ">About us</a>
                              </li>
                              <li>
                                <a href="# ">Contact us</a>
                              </li>
                              <li>
                                <a href="# ">About Us</a>
                              </li>
                              <li>
                                <a href="# ">404 Page</a>
                              </li>

                              <li className="has-dropdown">
                                <a href="# ">Coming soon</a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="# ">Coming soon 1</a>
                                  </li>
                                  <li>
                                    <a href="# ">Coming soon 2</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="# ">FAQ Page</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="# ">Shop</a>
                            <ul className="mega-menu">
                              <li>
                                <a href="# " className="item-link">
                                  Other Page
                                </a>
                                <ul className="px-0">
                                  <li>
                                    <a href="# ">Shopping Cart</a>
                                  </li>
                                  <li>
                                    <a href="# ">Checkout</a>
                                  </li>
                                  <li>
                                    <a href="# ">My account</a>
                                  </li>
                                  <li>
                                    <a href="# ">Order Tracking</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-banner">
                                <a href="# " className="item-link">
                                  <img src="" alt="banner" />
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="# ">Blog</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-6 col-md-6 col-8 d-flex justify-content-end">
                    <div className="header-icon search ">
                      <a className="search-trigger" href="# ">
                        <i className="fa fa-search"></i>
                      </a>
                    </div>
                    <div className="header-icon cart ">
                      <a href="# ">
                        <span className="cart-count">3</span>
                        <i className="fa fa-heart"></i>
                      </a>
                    </div>
                    <div className="header-icon cart ">
                      <a className="cart-trigger" href="# ">
                        <span className="cart-count">3</span>
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </div>
                    <div className="col-md-4">               

                      <nav id="navbar" class="navigation" role="navigation">
                        <input id="toggle1" type="checkbox" />
                        <label class="hamburger1" for="toggle1">
                          <div class="top"></div>
                          <div class="meat"></div>
                          <div class="bottom"></div>
                        </label>

                        <nav class="menu1">
                          <a class="link1" href="# ">
                           Profile
                          </a>
                          <a class="link1" href="# ">
                            Chat
                          </a>
                          <a class="link1" href="# ">
                            Notification
                          </a>
                          <a class="link1" href="# ">
                           Logout
                          </a>                       
                        </nav>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
