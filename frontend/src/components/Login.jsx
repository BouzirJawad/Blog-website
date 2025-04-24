import React from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { loginSchema } from '../schemas/validation'; 
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
      <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative my-4">
          <input
            type="email"
            id="login-email"
            {...register("email")}
            className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label htmlFor="login-email" className="absolute text-sm text-white transition-all duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Your Email
          </label>
          <BiUser className="absolute top-4 right-4" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="relative my-4">
          <input
            type="password"
            id="login-password"
            {...register("password")}
            className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label htmlFor="login-password" className="absolute text-sm text-white transition-all duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Your Password
          </label>
          <AiOutlineLock className="absolute top-4 right-4" />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="text-white text-sm">Remember Me</label>
          </div>
          <Link className="text-blue-500 text-sm" to="#">Forgot Password?</Link>
        </div>

        <button className="w-full mt-6 mb-4 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">
          Login
        </button>

        <div className="text-center">
          <span className="text-white text-sm">New here? <Link className="text-blue-500" to="/register">Create an Account</Link></span>
        </div>
      </form>
    </div>
  );
}

export default Login;
