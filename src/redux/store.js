import { configureStore } from "@reduxjs/toolkit";
import yachtSliceReducer from "./yachtSlice";
import authenticationReducer from "./authenticationSlice";

const store = configureStore({
    reducer: {
        yacht: yachtSliceReducer,
        authentication: authenticationReducer
    }
})

export default store;