// features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
    user: {},
};

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setShow, setUser } = mainSlice.actions;
export default mainSlice.reducer;