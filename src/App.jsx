
import React from "react";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CourseDetails from './components/CourseDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import FooterLynkt from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/solutions' element={<Solutions/>} />
        <Route path='/course/:courseTitle' element={<CourseDetails />} />
      </Routes>
      <FooterLynkt/>
    </Router>

  );
}

export default App;
