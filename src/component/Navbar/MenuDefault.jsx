import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Dropdown } from "react-bootstrap";

function MenuDefault() {
  return (
    <>
      <nav className="menu1 menu-before-login">
        <Link className="link1" to="/auth ">
          Login
        </Link>
        <Link className="link1" to="/auth ">
          Register
        </Link>
        <Link className="link1" to="/chat ">
          Chat
        </Link>
        <Link className="link1" to="/notif">
          Notification
        </Link>

        <div className="d-block d-xl-none link-dropdown">
          <Link className="link1" to="/">
            Home
          </Link>
        </div>
        <div className="d-block d-xl-none link-dropdown">
          <NavDropdown className="link1-nav-dropdown" title="Pages">
            <Dropdown.Item as="button" className="link1">
              <Link to="/about ">About us</Link>
            </Dropdown.Item>
            <Dropdown.Item as="button" className="link1">
              <Link to="/contact ">Contact us</Link>
            </Dropdown.Item>
            <Dropdown.Item as="button" className="link1">
              <Link to="/faq ">FAQ</Link>
            </Dropdown.Item>
            <Dropdown.Item as="button" className="link1">
              <Link to="/comingsoon ">Coming soon 1</Link>
            </Dropdown.Item>
            <Dropdown.Item as="button" className="link1">
              <Link to="/404 ">404 page</Link>
            </Dropdown.Item>
          </NavDropdown>
          <NavDropdown className="link1-nav-dropdown" title="Shop">
            <Dropdown.Item as="button" className="link1">
              <Link to="/cart">Shopping Cart</Link>
            </Dropdown.Item>
            <Dropdown.Item as="button" className="link1">
              {" "}
              <Link to="/checkout">Checkout</Link>
            </Dropdown.Item>
            <Dropdown.Item as="button" className="link1">
              <Link to="/profile">My account</Link>
            </Dropdown.Item>
            <Dropdown.Item as="button" className="link1">
              <Link to="/track ">Order Tracking</Link>
            </Dropdown.Item>
            <Dropdown.Item as="button" className="link1">
              <Link to="/404 ">404 page</Link>
            </Dropdown.Item>
          </NavDropdown>
        </div>
        <div className="d-block d-xl-none link-dropdown">
          <Link className="link1" to="/blog ">
            Blog
          </Link>
        </div>
      </nav>
    </>
  );
}

export default MenuDefault;
