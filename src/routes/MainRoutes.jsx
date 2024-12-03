import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Header } from '../Components/Header';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { AddProduct } from '../pages/AddProduct';
import { useDispatch, useSelector } from 'react-redux';
import { CarPage } from '../pages/CarPage';
import { setProducts } from '../store/slices';
import adaptador from '../assets/images/Adaptador USB-C jack.jpg';
import arduino from '../assets/images/Arduino1.jpg';
import audifonos from '../assets/images/Audifonos.jpg';
import audifonos2 from '../assets/images/AudifonosSony.jpg';
import bolsa from '../assets/images/BolsaG.jpg';
import cartera from '../assets/images/Cartera.jpg';

const products = [
    {
        id: 1,
        name: 'Adaptador USB-C a jack',
        type: 'Electronicos',
        price: 60,
        description: 'Adaptador de USB-C a entrada jack. De uso, en buen estado.',
        imgUrl: adaptador, // Cambia 'adaptador' a una clave específica
    },

    {
        id: 2,
        name: 'Arduino con cable',
        type: 'Electronicos',
        price: 400,
        description: 'Arduino con cable de conexión.',
        imgUrl: arduino,
    },

    {
        id: 3,
        name: 'Audifonos bluetooth',
        type: 'Electronicos',
        price: 180,
        description: 'Audifonos bluetooth. Comodos y fáciles de usar',
        imgUrl: audifonos,
    },

    {
        id: 4,
        name: 'Audifonos Sony',
        type: 'Electronicos',
        price: 250,
        description: 'Audifonos Sony en excelente estado.',
        imgUrl: audifonos2,
    },

    {
        id: 5,
        name: 'Bolsa Guess',
        type: 'Moda',
        price: 300,
        description: 'Bolsa Guess, en buenas condiciones.',
        imgUrl: bolsa,
    },

    {
        id: 6,
        name: 'Cartera',
        type: 'Moda',
        price: 260,
        description: 'Cartera de mujer.',
        imgUrl: cartera,
    },
];

export const MainRoutes = () => {

    const { auth } = useSelector((state) => state.mainSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(products))
    }, []);

    const loginRoutes = () => {
        return (
            <>
                <Route path='/' element={<Home />} />
                <Route path='/addProducto' element={<AddProduct />} />
            </>
        );
    };

    const unLoginRoutes = () => {
        return (
            <>
                <Route path='/inicioSesion' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/registro' element={<Register />} />
                <Route path='/carrito' element={<CarPage />} />
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
