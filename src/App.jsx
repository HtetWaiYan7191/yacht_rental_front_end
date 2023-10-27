/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Reservation from './pages/Reservation'
import ErrorPage from './pages/ErrorPage'
import React from 'react'
import Splash from './pages/Splash'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import PrivateRoute from './pages/PrivateRoute'

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        element={<PrivateRoute element={<Main />} />}
      />
      <Route
        path="/detail/:id"
        element={<PrivateRoute element={<Detail />} />}
      />
      <Route
        path="/reservation"
        element={<PrivateRoute element={<Reservation />} />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App
