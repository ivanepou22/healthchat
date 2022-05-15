import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css';
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Consultations from "./Pages/Consultations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consultations" element={<Consultations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
