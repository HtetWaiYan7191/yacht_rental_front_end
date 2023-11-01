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
  const response = await axios.post('http://127.0.0.1:3000/reservations', newReservation);
  return response.data;
});

export const deleteReservation = createAsyncThunk('delete/reservations', async (id) => {
  const response = await axios.delete(`http://127.0.0.1:3000/reservations/${id}`);
  return response.data.id;
});

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reservations = action.payload;
    });
    builder.addCase(deleteReservation.fulfilled, (state, action) => {
      const newState = state.reservations.filter(
        (reservation) => reservation.id !== action.payload,
      );
      state.reservations = newState;
    });
  },
});

export default reservationSlice.reducer;
