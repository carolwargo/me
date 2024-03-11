import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Blog from "./views/Blog/Blog";
import Restaurant from "./views/Restaurant/Restaurant"; 
import Resume from "./views/Resume/Resume";
import About from "./views/About/About";
import Contact from './views/Contact/Contact';
import Portfolio from './views/Portfolio/Portfolio';


import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/me" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
 
      </BrowserRouter>
  
  );
}

export default App;
