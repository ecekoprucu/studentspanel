import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { NoPage } from './pages/404';
import { Students } from './pages/Students';
import { Edit } from './pages/Edit';

import { DataProvider } from './context/studentContext';
import { Add } from './pages/Add';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Main />} />
          <Route path="/students" element={<Students />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
