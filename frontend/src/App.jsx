import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Image from './assets/Image.jpeg';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"style={{ backgroundImage: `url(${Image})` }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
