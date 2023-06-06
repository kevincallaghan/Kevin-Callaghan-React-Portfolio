import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Change BrowserRouter to HashRouter
import './App.css';
import Home from './components/pages/Home.js';
import Projects from './components/pages/Projects';
import About from './components/pages/About';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
