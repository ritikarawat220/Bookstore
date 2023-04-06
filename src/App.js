import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  <Router>
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
};

export default App;
