import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: 0,
    // loading: true,
};

export const loadingSlide = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        turnOn: (state) => {
            state.value = true;
        },
        turnOff: (state) => {
            state.value = false;
        },
    },
});

export const { turnOn, turnOff } = loadingSlide.actions;

export default loadingSlide.reducer;
