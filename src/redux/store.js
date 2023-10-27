import { configureStore } from "@reduxjs/toolkit";
import yachtSliceReducer from "./yachtSlice";
import detailsSliceReducer from "./detailsSlice";

const store = configureStore({
    reducer: {
        yacht: yachtSliceReducer,
        details: detailsSliceReducer,
    }
})

export default store;