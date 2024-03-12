import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Blog from "./views/Blog/Blog";
import Restaurant from "./views/Restaurant/Restaurant"; 
import Resume from "./views/Resume/Resume";
import About from "./views/About/About";
import Contact from './views/Contact/Contact';
import Portfolio from './views/Portfolio/Portfolio';
import Layout from './components/Layout';


import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
          <Route path="/me/about" element={<About />} />
          <Route path="/me/resume" element={<Resume />} />
          <Route path="/me/portfolio" element={<Portfolio />} />
          <Route path="/me/contact" element={<Contact />} />
          <Route path="/me/blog" element={<Blog />} />
          <Route path="/me/restaurant" element={<Restaurant />} />
          </Route>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
