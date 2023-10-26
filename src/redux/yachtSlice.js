import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    values: [],
    loading: false,
    error: ''
}

const yachtSlice = createSlice({
    name: 'yacht',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default yachtSlice.reducer