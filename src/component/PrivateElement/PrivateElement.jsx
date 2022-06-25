import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateElement({
    children,
    redirectTo = "/auth",
    isRouteReplaced = true,
    extraData = undefined,
}) {
    const { token } = useSelector((state) => state.auth);

    if (!token) {
        return (
            <Navigate to={redirectTo} replace={isRouteReplaced} state={extraData} />
        );
    }
    return children;
}

export default PrivateElement