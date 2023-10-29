import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  values: [],
  loading: false,
  error: '',
};

export const fetchYachts = createAsyncThunk('Main/yachts', async () => {
  console.log('fetch function is working');
  try {
    const response = await axios.get('http://127.0.0.1:3000/yachts/');

    if (response.statusText !== 'OK') {
      throw new Error('Can not fetch data');
    }
    return response.data;
  } catch (error) {
    throw new Error('Error fetching detail data');
  }
});

export const postYacht = createAsyncThunk('post/yacht', async (params) => {
  const response = await axios.post('http://127.0.0.1:3000/yachts', params);
  return response.data;
});

const yachtSlice = createSlice({
  name: 'yacht',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchYachts.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
    });
  },
});

export default yachtSlice.reducer;
