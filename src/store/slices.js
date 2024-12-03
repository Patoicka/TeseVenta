// features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    show: false,
    user: {},
    products: [],
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
    },
});

export const { setShow, setUser, setAuth, setProducts, setCar } = mainSlice.actions;
export default mainSlice.reducer;