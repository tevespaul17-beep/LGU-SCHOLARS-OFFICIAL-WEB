import React, { useState } from 'react';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';

function App() {
  // simple router simulation
  const [route, setRoute] = useState('login');
  return (
    <div className="min-h-screen bg-white font-inter">
      {route === 'login' && <Login onSwitch={() => setRoute('register')} />}
      {route === 'register' && <Register onSwitch={() => setRoute('login')} />}
      {route === 'forgot' && <Forgot />}
      {['dashboard', 'masterlist', 'scanner','overview','announcements','service','documents','concerns'].includes(route) && (
        <Layout current={route} onNavigate={setRoute} />
      )}
    </div>
  );
}

export default App;
