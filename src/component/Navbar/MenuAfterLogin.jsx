import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserInfo,
  logOutFromServer,
  resetUserState,
} from "../../redux/actionCreator/user";
import { logoutAction } from "../../redux/actionCreator/auth";

function MenuAfterLogin() {
  const getUserFail = useSelector((state) => state.user.err);
  const token = useSelector((state) => state.auth.token);
  const { updateResult, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(token);
  const handleLogout = async () => {
    await Promise.all([dispatch(logOutFromServer({ token: token }))]).then(
      setTimeout(() => {
        dispatch(logoutAction());
        dispatch(resetUserState());
      }, 2000)
    );
  };

  useEffect(() => {
    if (token) {
      dispatch(getUserInfo({ token: token }));
    }
    if (updateResult) {
      dispatch(getUserInfo({ token: token }));
    }
    if ((getUserFail && !userInfo) || getUserFail) {
      dispatch(logoutAction());
      setTimeout(() => {
        dispatch(resetUserState());
      }, 2000);
    }
  }, [dispatch, getUserFail, token, updateResult, userInfo]);
  return (
    <>
      <nav className="menu1 menu-after-login">
        <Link className="link1" to="/profile ">
          Profile
        </Link>
        <Link className="link1" to="/chat ">
          Chat
        </Link>
        <Link className="link1" to="/notif ">
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
        <div
          className="link1"
          style={{ cursor: "pointer" }}
          onClick={handleLogout}
        >
          Logout
        </div>
      </nav>
    </>
  );
}

export default MenuAfterLogin;
