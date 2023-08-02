import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Services from './components/services/Services';
import Store from './components/Store/Store';
import Contact from './components/Contact/Contact';
import Register from './components/Register/Register';
const App = () => {



  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/services' element={<Services />} />
          <Route path='/store' element={<Store />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
