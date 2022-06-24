import React from "react";
import { Link } from "react-router-dom";

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
      </nav>
    </>
  );
}

export default MenuDefault;
