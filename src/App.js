/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/index';
import Red from './components/redes/index'
import Login from './components/login';
import AdminDashboard from './components/login/admin/index';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redes" element={<Red />} />
        <Route path="/account/admin" element={<Login/>}/>
        <Route path="/account/admin/home" element={< AdminDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;