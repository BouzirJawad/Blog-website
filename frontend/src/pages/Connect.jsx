import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

function Connect() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Connect;
