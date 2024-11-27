import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Header } from '../Components/Header';
import { Login } from '../pages/Login';

export const MainRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/login' element={<Login />} />
                < Route path='/' element={<Home />} />
            </Routes>
        </Router>

    )
};
