import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Telescopes from "./components/Telescopes";
import Publications from "./components/Publications";
import Team from "./components/Team";
import Contact from './components/Contact';
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/telescopes" element={<Telescopes />}/>
        <Route path="/publications" element={<Publications />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
