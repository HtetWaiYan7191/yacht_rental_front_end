import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    error: '',
    cities: [],
}

export const fetchCities = createAsyncThunk('fetch/cities', async () => {
    const response = await axios.get('http://127.0.0.1:3000/cities')
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