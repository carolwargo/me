import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Blog from "./views/Blog/Blog";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="me">
        <Routes>
        <Route path="/" element={<Home />}/>    
        <Route path="/blog" element={<Blog />}/>  
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
