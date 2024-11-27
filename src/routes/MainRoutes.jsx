import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Header } from '../Components/Header';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { AddProduct } from '../pages/AddProduct';

export const MainRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/inicioSesion' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/registro' element={<Register />} />
                <Route path='/addProducto' element={<AddProduct />} />
            </Routes>
        </Router>

    )
};
