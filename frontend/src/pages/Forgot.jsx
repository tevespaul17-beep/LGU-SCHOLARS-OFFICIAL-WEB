import React, { useState } from 'react';

const Forgot = () => {
  const [email, setEmail] = useState('');
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md glassmorphism">
        <h1 className="text-2xl font-bold mb-6 text-center" style={{color:'var(--deep-blue)'}}>Forgot Password</h1>
        <form>
          <div className="mb-4 relative">
            <i className="fa fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--deep-blue)]"></i>
            <input
              type="email"
              placeholder="Registered Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[var(--light-blue)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--deep-blue)]"
            />
          </div>
          <button
            type="submit"
            className="w-full"
            style={{backgroundColor:'var(--deep-blue)',color:'#fff',padding:'0.5rem',borderRadius:'0.5rem',fontWeight:600}}
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
