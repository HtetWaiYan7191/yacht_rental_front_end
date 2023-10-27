import { configureStore } from "@reduxjs/toolkit";
import yachtSliceReducer from "./yachtSlice";
import detailsSliceReducer from "./detailsSlice";
import authenticationReducer from "./authenticationSlice";

const store = configureStore({
    reducer: {
        yacht: yachtSliceReducer,
        details: detailsSliceReducer,
        authentication: authenticationReducer
    }
})

export default store;