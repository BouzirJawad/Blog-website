import React from 'react';
import Connect from './pages/Connect';
import Header from './components/Header';
import ArticleForm from './components/ArticleForm';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col">
      <Header />
      
      <div className="flex-grow flex justify-center items-center">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-10 shadow-xl w-full max-w-4xl mx-auto">
          <Routes>
            <Route path="/*" element={<Connect />} />
            <Route path="/new-article" element={<ArticleForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
