/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Reservation from './pages/Reservation'
import ErrorPage from './pages/ErrorPage'
import React from 'react'
import AddYacht from './pages/AddYacht'
import DeleteYacht from './pages/DeleteYacht'
import Reserve from './pages/Reserve'
const App = () => (
  <Routes>
    <Route path="/main" element={<Main/>}></Route>
    <Route path="/reserve" element={<Reserve/>}></Route>
    <Route path="/new/yacht" element={<AddYacht/>}></Route>
    <Route path="/delete" element={<DeleteYacht/>}></Route>
    <Route path="/detail/:id" element={<Detail/>}></Route>
    <Route path="/reservation" element={<Reservation/>}></Route>
    <Route path="*" element={<ErrorPage/>}> </Route>
  </Routes>
)

export default App
