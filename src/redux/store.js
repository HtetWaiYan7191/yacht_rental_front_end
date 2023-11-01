import { configureStore } from '@reduxjs/toolkit';
import yachtSliceReducer from './yachtSlice';
import detailsSliceReducer from './detailsSlice';
import authenticationReducer from './authenticationSlice';
import citySlice from './citySlice';
import reserveSlice from './reserveSlice';

const store = configureStore({
  reducer: {
    yacht: yachtSliceReducer,
    details: detailsSliceReducer,
    authentication: authenticationReducer,
    city: citySlice,
    reservation: reserveSlice,
  },
});

export default store;
