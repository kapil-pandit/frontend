import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
    </div>
    </Router>

  );
}

export default App;
