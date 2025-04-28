import React from 'react';
import Connect from './pages/Connect';
import MainPage from "./pages/MainPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/main/*" element={<MainPage /> }/>
          <Route path="/*" element={<Connect />} />
        </Routes>
      </Router>
    </div>
  );
}
