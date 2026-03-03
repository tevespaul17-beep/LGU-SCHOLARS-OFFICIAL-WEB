import React, { useState } from 'react';
import { Mail, Lock, User, AlertCircle } from 'lucide-react';

const Register = ({ onSwitch }) => {
  const [error, setError] = useState('');
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md glassmorphism">
        <h1 className="text-2xl font-bold mb-6 text-center" style={{color: 'var(--deep-blue)'}}>Register</h1>
        {error && (
          <div className="mb-4 p-3 alert alert-error flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}
        <form>
          <div className="mb-4 relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6 relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full"
            style={{backgroundColor: 'var(--deep-blue)', color: '#fff', padding: '0.5rem', borderRadius: '0.5rem', fontWeight: 600}}
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <a href="#" onClick={onSwitch} className="text-[var(--deep-blue)] hover:text-[var(--light-blue)]">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
