import logo from './logo.svg';
import './App.css';
import React from 'react';
import List from './list';
import Display from './Display';

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";


export const DataContext = React.createContext();
const baseURL="https://d9l2z4qpg6.execute-api.us-east-1.amazonaws.com/reactapp/"

function App() {
  const [parentData, setParentData] = React.useState({"date":"2022-12-10","text":"I played tennis0","wordList":["tennis"]});
  const value = {
    parentData,
    setParentData,
  };

  return (
    <DataContext.Provider value={value}>
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/display" element={<Display data={parentData}/>} />
            <Route path="/" element={<List />} />
        </Routes>
      </div>
    </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
