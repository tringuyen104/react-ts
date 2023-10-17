import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import AppRouter from './router';
function App() {
    return (
        <div className="container-fluid">
            <Header />
            <div className='container'>
                <AppRouter />
            </div>
        </div>
    );
}
export default App;