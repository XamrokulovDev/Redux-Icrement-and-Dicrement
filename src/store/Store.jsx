import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Slices/Slice'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
    },
})