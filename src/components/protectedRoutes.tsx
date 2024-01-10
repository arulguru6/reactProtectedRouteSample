import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    let user: any;
    const _user = localStorage.getItem('user');
    if (_user) {
        user = JSON.parse(_user);
        console.log("user", user)
    }
    if (user) {
        return {
            auth: true,
            role: user.role
        }
    }
    else {
        return {
            auth: false,
            role: null
        };
    }
}

type ProtectedRouteType = {
    roleRequired?: 'ADMIN' | 'USER'
}


function ProtectedRoutes(props: ProtectedRouteType) {

    const { auth, role } = useAuth();

    //if the role required is there or not
    if (props.roleRequired) {
        return auth ? (
            props.roleRequired === role ? (
                <Outlet />
            ) : (
                <Navigate to="/denied" />
            )
        ) : (
            <Navigate to="/login" />
        )
    } else {
        return auth ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>
    }


}

export default ProtectedRoutes