import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();


    if (loading) {
        return <progress className="progress progress-info w-56"></progress>
    }


    if (user) {
        return children
    } return <Navigate state={{ from: location }} to="/login" replace></Navigate>


};

export default PrivateRoute;