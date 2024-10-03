import React from "react";
import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children }) {
    const CheckAuth = () => {
        const isAuth = localStorage.getItem('isAuth');
        return isAuth ; // Ensure it checks against the string 'true'
    };

    const location = useLocation();
    const isAuthRes = CheckAuth();

    return isAuthRes ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
}

export default RequireAuth;