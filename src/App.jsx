import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Reservation from './pages/Reservation'
import ErrorPage from './pages/ErrorPage'

const App = () => (
  <Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/detail/:id" element={<Detail/>}></Route>
    <Route path="/reservation" element={<Reservation/>}></Route>
    <Route path="*" element={<ErrorPage/>}> </Route>
  </Routes>
)

export default App
