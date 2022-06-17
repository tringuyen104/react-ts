import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet
} from "react-router-dom";

const PrivateRoute = () => {
    const isAuth = true;//authUtils.isLogged();

    return (
        <>
            {
                isAuth ?
                    <Outlet /> :
                    <Navigate to={'/login'} replace={true} />
            }
        </>
    )
}

export default PrivateRoute;