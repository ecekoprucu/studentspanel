import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { NoPage } from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login />}/>
         <Route path='/dashboard' element={<Main />} />
         <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
