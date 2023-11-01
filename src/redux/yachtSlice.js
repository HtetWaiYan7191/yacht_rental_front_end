import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  values: [],
  loading: false,
  error: "",
  status: false,
};

export const deleteYacht = createAsyncThunk("yacht/delete", async (id) => {  
    const response = await axios.delete(`https://beta-yacht-rental.onrender.com/yachts/${id}`);
    return response.data.id;
});

export const postYacht = createAsyncThunk('post/yacht', async (params) => {
  const response = await axios.post('https://beta-yacht-rental.onrender.com/yachts', params);
  return response.data;
});

export const fetchYachts = createAsyncThunk("Main/yachts", async () => {
  try {
    const response = await axios.get("https://beta-yacht-rental.onrender.com/yachts/");

    if (response.statusText !== "OK") {
      throw new Error("Can not fetch data");
    }
    return response.data;
  } catch (error) {
    throw new Error("Error fetching detail data");
  }
});

const yachtSlice = createSlice({
  name: "yacht",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchYachts.pending, (state) => {
        state.loading = true;
      });

      builder.addCase(fetchYachts.fulfilled, (state, action) => {
        state.loading = false;
        state.values = action.payload;
      });
    builder
      .addCase(deleteYacht.pending, (state) => {
        state.status = true;
      })
      .addCase(deleteYacht.fulfilled, (state, action) => {
        state.status = false;
        const newState = state.values.filter((yacht) => yacht.id !== action.payload)
        state.values = newState
      })
      .addCase(deleteYacht.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});

export default yachtSlice.reducer;
