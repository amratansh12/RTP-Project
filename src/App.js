import './App.css';
import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Telescope from './Components/Telescope/Telescope';
import Footer from './Components/Footer/Footer'
import Publications from './Components/Publications/Publications';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <>
      {/* <Navbar/>
      <Publications />
      <Home/>
      <Telescope/>
      <Footer/> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/telescopes" element={<Telescope />}/>
        <Route path="/publications" element={<Publications />}/>
        {/* <Route path="/team" element={<Team />}/> */}
        {/* <Route path="/contact" element={<Contact />}/> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
    </Router>
  );
}

export default App;
