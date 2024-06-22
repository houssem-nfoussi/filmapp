import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/home"element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
