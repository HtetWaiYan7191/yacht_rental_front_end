/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Reservation from './pages/Reservation'
import ErrorPage from './pages/ErrorPage'
import React from 'react'

const App = () => (
  <Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/detail/:id" element={<Detail/>}></Route>
    <Route path="/reservation" element={<Reservation/>}></Route>
    <Route path="*" element={<ErrorPage/>}> </Route>
  </Routes>
)

export default App
