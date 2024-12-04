// features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import adaptador from '../assets/images/Adaptador USB-C jack.jpg';
import arduino from '../assets/images/Arduino1.jpg';
import audifonos from '../assets/images/Audifonos.jpg';
import audifonos2 from '../assets/images/AudifonosSony.jpg';
import bolsa from '../assets/images/BolsaG.jpg';
import cartera from '../assets/images/Cartera.jpg';

const initialState = {
    auth: false,
    show: false,
    user: {},
    products: [
        {
            id: 1,
            name: 'Adaptador USB-C a jack',
            type: 'Electronicos',
            price: 60,
            description: 'Adaptador de USB-C a entrada jack. De uso, en buen estado.',
            imgUrl: adaptador,
            telefono: 5512301204,
            vendedor: 'Carlos López',
        },
        {
            id: 2,
            name: 'Arduino con cable',
            type: 'Electronicos',
            price: 400,
            description: 'Arduino con cable de conexión.',
            imgUrl: arduino,
            telefono: 5523456789,
            vendedor: 'María García',
        },
        {
            id: 3,
            name: 'Audifonos bluetooth',
            type: 'Electronicos',
            price: 180,
            description: 'Audifonos bluetooth. Comodos y fáciles de usar',
            imgUrl: audifonos,
            telefono: 5534567890,
            vendedor: 'Jorge Martínez',
        },
        {
            id: 4,
            name: 'Audifonos Sony',
            type: 'Electronicos',
            price: 250,
            description: 'Audifonos Sony en excelente estado.',
            imgUrl: audifonos2,
            telefono: 5545678901,
            vendedor: 'Ana Fernández',
        },
        {
            id: 5,
            name: 'Bolsa Guess',
            type: 'Moda',
            price: 300,
            description: 'Bolsa Guess, en buenas condiciones.',
            imgUrl: bolsa,
            telefono: 5556789012,
            vendedor: 'Laura Sánchez',
        },
        {
            id: 6,
            name: 'Cartera',
            type: 'Moda',
            price: 260,
            description: 'Cartera de mujer.',
            imgUrl: cartera,
            telefono: 5567890123,
            vendedor: 'Elena Ruiz',
        },
    ],
    car: [],
};

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
        setShow: (state, action) => {
            state.show = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setProducts: (state, action) => {
            state.products = [...state.products, ...action.payload];
        },
        setCar: (state, action) => {
            state.car.push(action.payload);
        },

        clearCar: (state) => {
            state.car = [];
        },

    },
});

export const { setShow, setUser, setAuth, setProducts, setCar, clearCar } = mainSlice.actions;
export default mainSlice.reducer;