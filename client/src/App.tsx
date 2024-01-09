import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'; // Adjust the import path as necessary
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-content">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
