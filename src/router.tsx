import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { ReactNode } from 'react';
import HomePage from "./components/home/Homepage";
import PrivateRoute from "./routers/PrivateRoute";

const AppRouter = () => {
    return (
        <Routes>
            {/* {redirectPrivateRoute('/', HomePage)} */}
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;