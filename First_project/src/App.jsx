import React from 'react'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login';
import Newuser from './pages/Newuser'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route element={<Navbar />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Newuser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
