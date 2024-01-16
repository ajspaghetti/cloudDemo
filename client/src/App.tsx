import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Nav from './components/Nav'; // Adjust the import path as necessary
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import NotFound from './components/NotFound';
import WorkHistory from './components/WorkHistory'
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer';
import Shop from './components/Shop'
import Projects from './components/Projects'
import CreateAccount from './components/CreateAccount';
import Forgot from './components/Forgot';
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
            <Route path="/workhistory" element={<WorkHistory />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="*" element={<NotFound />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/shop" element={<Shop />} />
            </Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
