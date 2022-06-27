import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BannerNav from "../../assets/img/banner-nav.png";

import MenuAfterLogin from "./MenuAfterLogin";
import MenuDefault from "./MenuDefault";
import { getKeyword } from "../../redux/actionCreator/search";
import axios from "axios";

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const cartItems = useSelector((state) => state.cart.cartItem);
  const [wishlist, setWishlist] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${process.env.REACT_APP_HOST_API}/wishlist`, { headers: { Authorization: `Bearer ${token}` } });
        setWishlist(result.data.data);
      } catch (err) {
        console.log(err.response ? err.response.data.error : err.message);
      }
    })();
  }, [token]);

  return (
    <>
      <nav>
        <div className="container">
          <div className="header-absolute">
            <div className="header-default d-flex align-items-center">
              <div className="container-fluid">
                <div className="row align-items-center nav-rspsv nav-row-custom">
                  <div className="col-xl-4 col-lg-6 col-md-6 col-4 pl-5 nav-col-custom">
                    <div className="logo">
                      {/* <Link to="/"><img src=" " alt="logo"/></Link> */}
                      <h1 className="text-logo-nav">ZILGYA</h1>
                    </div>
                  </div>
                  <div className="col-xl-4 d-none d-xl-block">
                    <div className="menu-center d-flex justify-content-center">
                      <nav className="main-menu">
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li className="li-dropdown">
                            <Link to="#">Pages</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link to="/about ">About us</Link>
                              </li>
                              <li>
                                <Link to="/contact ">Contact us</Link>
                              </li>
                              <li>
                                <Link to="/404">404 Page</Link>
                              </li>

                              <li className="has-dropdown">
                                <Link to="# ">Coming soon</Link>
                                <ul className="sub-menu">
                                  <li>
                                    <Link to="/comingsoon">Coming soon 1</Link>
                                  </li>
                                  <li>
                                    <Link to="# ">Coming soon 2</Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="/faq ">FAQ Page</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="li-dropdown">
                            <Link to="/product ">Shop</Link>
                            <ul className="mega-menu">
                              <li className="col-md-6 pl-0">
                                <Link to="# " className="item-link">
                                  Other Page
                                </Link>
                                <ul className="px-0">
                                  <li>
                                    <Link to="/cart">Shopping Cart</Link>
                                  </li>
                                  <li>
                                    <Link to="/checkout">Checkout</Link>
                                  </li>
                                  <li>
                                    <Link to="/profile">My account</Link>
                                  </li>
                                  <li>
                                    <Link to="/track ">Order Tracking</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="col-md-6 mega-menu-banner">
                                <Link to="# " className="item-link">
                                  <img src={BannerNav} alt="banner" />
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/blog ">Blog</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-4 pl-5 col-lg-4 col-md-4 col-4 d-flex icon-nav-group nav-icon-custom">
                    <div className="header-icon search ">
                      <nav className="search-menu">
                        <ul>
                          <li>
                            <p>
                              <i className="fa fa-search"></i>
                            </p>
                            <ul className="sub-search-menu">
                              <li>
                                <input
                                  id="search"
                                  type="text"
                                  placeholder="Search"
                                  onKeyUp={(e) => {
                                    e.preventDefault();
                                    if (e.key === "Enter") {
                                      const { value } = e.target;
                                      dispatch(getKeyword(value));
                                      navigate("/product", { replace: true });
                                    }
                                  }}
                                  autoFocus
                                />
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="header-icon cart ">
                      <Link to="/wishlist ">
                        {wishlist.length > 0 && (
                          <>
                            {" "}
                            <span className="cart-count">{wishlist.length}</span>
                          </>
                        )}
                        <i className="fa fa-heart"></i>
                      </Link>
                    </div>
                    <div className="header-icon cart ">
                      <Link to="/cart ">
                        {cartItems.length > 0 && (
                          <>
                            {" "}
                            <span className="cart-count">{cartItems.length}</span>
                          </>
                        )}
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </div>
                    <div className="col-md-4">
                      <nav id="navbar" className="navigation" role="navigation">
                        <input id="toggle1" type="checkbox" />
                        <label className="hamburger1 navbar-label" htmlFor="toggle1">
                          <div className="top"></div>
                          <div className="meat"></div>
                          <div className="bottom"></div>
                        </label>
                        {token ? <MenuAfterLogin /> : <MenuDefault />}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
