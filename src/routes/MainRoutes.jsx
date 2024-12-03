import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Header } from '../Components/Header';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { AddProduct } from '../pages/AddProduct';
import { useSelector } from 'react-redux';
import { CarPage } from '../pages/CarPage';

export const MainRoutes = () => {

    const { auth } = useSelector((state) => state.mainSlice);

    const loginRoutes = () => {
        return (
            <>
                <Route path='/' element={<Home />} />
                <Route path='/addProducto' element={<AddProduct />} />
                <Route path='/carrito' element={<CarPage />} />
            </>
        );
    };

    const unLoginRoutes = () => {
        return (
            <>
                <Route path='/inicioSesion' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/registro' element={<Register />} />
            </>
        )
    };

    return (
        <Router>
            <Header />
            <Routes>
                {auth ? loginRoutes() : unLoginRoutes()}
            </Routes>
        </Router>

    )
};
