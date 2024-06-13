import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    let location = useLocation();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute