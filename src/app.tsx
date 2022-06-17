import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import AppRouter from './router';
function App() {
    return (
        <>
            <Header />
        </>
    );
}
export default App;