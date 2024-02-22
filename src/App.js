import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/index';
import Red from './components/redes/index'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redes" element={<Red />} />
      </Routes>
    </Router>
  );
}

export default App;