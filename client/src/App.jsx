import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import './App.css'
import Header from './components/Header'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {


  return (
    <>
      <div>
  <Header />

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={ <Login />} />
  </Routes>
  </BrowserRouter>
       </div>
    </>
  )
}

export default App
