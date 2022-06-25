import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserInfo,
  logOutFromServer,
  resetUserState,
} from "../../redux/actionCreator/user";
import { logoutAction } from "../../redux/actionCreator/auth";

function MenuAfterLogin() {
  const loginFail = useSelector((state) => state.user.err);
  const token = useSelector((state) => state.auth.token);
  const { updateResult } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await Promise.all([dispatch(logOutFromServer({ token: token }))]).then(
      setTimeout(() => {
        dispatch(logoutAction());
        dispatch(resetUserState());
      }, 3000)
    );
  };

  useEffect(() => {
    dispatch(getUserInfo({ token: token }));
    if (updateResult) {
      dispatch(getUserInfo({ token: token }));
    }
    if (loginFail === "You need to Sign in again") {
      dispatch(logoutAction());
    }
  }, [dispatch, loginFail, token, updateResult]);
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
