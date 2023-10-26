/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar/Navbar.jsx'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Provider store={store}>
        <Navbar/>
        <App/>
      </Provider>
    </BrowserRouter>
  
)
