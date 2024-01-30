import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    error: '',
    cities: [],
}

export const fetchCities = createAsyncThunk('fetch/cities', async () => {
    const response = await axios.get('https://yacht-rental-b1c14a12245e.herokuapp.com/cities');
    return response.data
})

const citySlice = createSlice({
    name: 'city',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCities.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchCities.fulfilled, (state, action) => {
            state.isLoading = false
            state.cities = action.payload
        } )
    }
})

export default citySlice.reducer;