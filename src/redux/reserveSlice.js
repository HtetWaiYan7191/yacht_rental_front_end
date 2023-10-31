import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: '',
  reservations: [],
};

export const fetchReservations = createAsyncThunk('fetch/reservations', async () => {
  const response = await axios.get('http://127.0.0.1:3000/reservations');
  return response.data;
});

export const postReservations = createAsyncThunk('post/reservations', async (newReservation) => {
  const response = await axios.post('http://127.0.0.1:3000/reservations',newReservation);
  console.log(response)
  return response.data;
});

const citySlice = createSlice({
  name: 'city',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cities = action.payload;
    });
  },
});

export default citySlice.reducer;
