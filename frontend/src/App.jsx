import React from 'react';
import Image from './assets/Image.jpeg';
import Connect from './pages/Connect'

export default function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Image})` }}>
        <Connect />
    </div>
  );
}
