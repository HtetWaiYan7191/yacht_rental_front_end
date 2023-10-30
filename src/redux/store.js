import { configureStore } from "@reduxjs/toolkit";
import yachtSliceReducer from "./yachtSlice";
import detailsSliceReducer from "./detailsSlice";
import authenticationReducer from "./authenticationSlice";
import citySlice from "./citySlice";

const store = configureStore({
    reducer: {
        yacht: yachtSliceReducer,
        details: detailsSliceReducer,
        authentication: authenticationReducer,
        city: citySlice
    }
})

export default store;