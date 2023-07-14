import './App.css';
import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Telescope from './Components/Telescope/Telescope';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Telescope/>
      <Footer/>
    </>
  );
}

export default App;
