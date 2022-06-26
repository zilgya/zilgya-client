import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

<<<<<<< HEAD
function PrivateElementAfterLoginSeller({ children, redirectTo = "/", isRouteReplaced = true, extraData = undefined }) {
  const { roles_id } = useSelector((state) => state.auth.userInfo);

  if (roles_id !== "2") {
    return <Navigate to={redirectTo} replace={isRouteReplaced} state={extraData} />;
  }
  return children;
=======
function PrivateElementAfterLoginSeller({
    children,
    redirectTo = "/",
    isRouteReplaced = true,
    extraData = undefined,
}) {
    const { roles_id } = useSelector((state) => state.auth.userInfo);
    if (roles_id !== "2") {
        return (
            <Navigate to={redirectTo} replace={isRouteReplaced} state={extraData} />
        );
    }
    return children;
>>>>>>> a942dc22790c8a74139e6f67f6dc53f7b52be76d
}

export default PrivateElementAfterLoginSeller;
