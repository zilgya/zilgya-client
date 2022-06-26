import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateElementAfterLogin({
    children,
    redirectTo = "/",
    isRouteReplaced = true,
    extraData = undefined,
}) {
    const { token } = useSelector((state) => state.auth);

    if (token) {
        return (
            <Navigate to={redirectTo} replace={isRouteReplaced} state={extraData} />
        );
    }
    return children;
}

export default PrivateElementAfterLogin