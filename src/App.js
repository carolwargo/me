import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";


import "./App.css";

function App() {
  return (
    <BrowserRouter basename="me">
        <Routes>
        <Route path="/" element={<Home />}/>    
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
