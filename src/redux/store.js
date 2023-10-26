import { configureStore } from "@reduxjs/toolkit";
import yachtSliceReducer from "./yachtSlice";

const store = configureStore({
    reducer: {
        yacht: yachtSliceReducer,
    }
})

export default store;