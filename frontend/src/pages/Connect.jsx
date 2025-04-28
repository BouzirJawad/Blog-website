import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

function Connect() {
  return (
    <div className='w-[40%] mx-auto'>

    <Routes >
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    
    </div>
  );
}

export default Connect;
