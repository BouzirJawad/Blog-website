import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connect from "./pages/Connect";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<MainPage /> }/>
          <Route path="/Connect" element={<Connect />} />
        </Routes>
      </Router>
    </div>
  );
}
