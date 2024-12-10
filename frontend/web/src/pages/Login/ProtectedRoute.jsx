import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { userRole } = useContext(UserContext);
    const isLoggedIn = localStorage.getItem('loginState');

    if (isLoggedIn && allowedRoles.includes(userRole)) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;