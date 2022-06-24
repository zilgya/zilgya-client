import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, logOutFromServer } from "../../redux/actionCreator/user";
import { logoutAction } from "../../redux/actionCreator/auth";

function MenuAfterLogin() {
  const loginInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const token = await loginInfo.token;
      if (token) {
        dispatch(logOutFromServer());
      }
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(logoutAction());
    }
  };
  useEffect(() => {
    const token = loginInfo.token;
    dispatch(getUserInfo({ token: token }));
  }, [dispatch, loginInfo.token]);
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
