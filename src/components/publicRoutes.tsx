import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const user = localStorage.getItem('user');
    if (user) {
        return true
    }
    else return false;
}

function PublicRoutes() {

    const auth = useAuth();

    return auth ? <Navigate to="/dashboard"></Navigate> : <Outlet></Outlet>
}

export default PublicRoutes