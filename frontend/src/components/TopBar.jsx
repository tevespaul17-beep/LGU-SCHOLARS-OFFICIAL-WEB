import React from 'react';

const TopBar = ({ title }) => (
  <header className="bg-white shadow p-4 flex justify-between items-center" style={{ borderBottom: '1px solid var(--light-blue)' }}>
    <h2 className="text-xl font-semibold" style={{ color: 'var(--deep-blue)' }}>{title}</h2>
    <button className="font-medium" style={{ color: 'var(--deep-blue)' }}>Logout</button>
  </header>
);

export default TopBar;
