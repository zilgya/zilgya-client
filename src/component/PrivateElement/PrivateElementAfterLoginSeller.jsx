import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateElementAfterLoginSeller({ children, redirectTo = "/", isRouteReplaced = true, extraData = undefined }) {
  const { roles_id } = useSelector((state) => state.auth.userInfo);

  if (roles_id !== "2") {
    return <Navigate to={redirectTo} replace={isRouteReplaced} state={extraData} />;
  }
  return children;
}

export default PrivateElementAfterLoginSeller;
