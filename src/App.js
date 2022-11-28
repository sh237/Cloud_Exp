import logo from './logo.svg';
import './App.css';
import React from 'react';
import List from './list';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<List />} />
            {/* <Route path="company" element={<Company />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
