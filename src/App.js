import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Nav from "./views/Nav";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="me">
        <Routes>
        <Route path="/" element={<Home />}/>    
        <Route path="/nav" element={<Nav />}/>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
