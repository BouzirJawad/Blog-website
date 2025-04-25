import React from 'react';
import Connect from './pages/Connect'

export default function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-800 to-slate-900 flex justify-center items-center">
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-10 shadow-xl">
      <Connect />
    </div>
  </div>
  
  
  );
}
