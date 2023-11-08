import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  yachtDetails: {
    name: '',
    fee_par_day: 0,
  },
  isLoading: true,
  hasErrors: false,
};


const url = 'https://beta-yacht-rental.onrender.com/yachts';

export const fetchYachtDetails = createAsyncThunk(
  'details/fetchYachtDetails',
  async (id) => {
    try {
      const response = await axios.get(`${url}/${id}`);
      const yachtDetails = response.data;
      return yachtDetails;
    } catch (error) {
      throw new Error('Error fetching yacht details');
    }
  }
);

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYachtDetails.fulfilled, (state, action) => {
        state.yachtDetails = action.payload;
        state.isLoading = false;
        state.hasErrors = false;
      })
      .addCase(fetchYachtDetails.pending, (state) => {
        state.isLoading = true;
        state.hasErrors = false;
      })
      .addCase(fetchYachtDetails.rejected, (state) => {
        state.isLoading = false;
        state.hasErrors = true;
      });
  },
});

export default detailsSlice.reducer;
