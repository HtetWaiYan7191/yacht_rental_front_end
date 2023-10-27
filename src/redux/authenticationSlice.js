import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: true,
  isAuthenticated: false,
  authToken: '',
  response: {},
};

const LOGIN_URL = 'http://127.0.0.1:3000/login';
const LOGOUT_URL = 'http://127.0.0.1:3000/logout';
const SIGNUP_URL = 'http://127.0.0.1:3000/signup';

export const signUp = createAsyncThunk('user/signup', async (newUser) => {
  const response = await axios.post(`${SIGNUP_URL}`, newUser);
  return response.data;
});

export const logIn = createAsyncThunk('user/login', async (newSession) => {
  const response = await axios.post(`${LOGIN_URL}`, newSession)
  sessionStorage.setItem('authToken', response.headers.authorization);
  return response.status;
});

export const logOut = createAsyncThunk('user/logout', async (authToken) => {
  const response = await axios.delete(`${LOGOUT_URL}`, {
    headers: {
      Authorization: authToken,
    },
  });
  return response.status;
});

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => ({
      ...state,
      response: action.payload,
    }));
    builder.addCase(logIn.fulfilled, (state, action) => ({
      ...state,
      isAuthenticated: true,
      authToken: action.payload,
    }));
  },
});

export default authenticationSlice.reducer;
