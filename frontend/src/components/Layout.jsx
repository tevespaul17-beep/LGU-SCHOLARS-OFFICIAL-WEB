import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = ({ current, onNavigate }) => {
  return (
    <div className="flex h-screen">
      <Sidebar current={current} onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col">
        <TopBar title={current.charAt(0).toUpperCase() + current.slice(1)} />
        <main className="p-6 overflow-auto bg-white">
          {current === 'dashboard' && (
            <>
              <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
              <p>Welcome to the LGU Scholars portal.</p>
            </>
          )}
          {current === 'masterlist' && (
            <>
              <h1 className="text-2xl font-bold mb-4">Masterlist</h1>
              <p>Here you can view the scholar masterlist.</p>
            </>
          )}
          {current === 'scanner' && (
            <>
              <h1 className="text-2xl font-bold mb-4">Scanner</h1>
              <p>QR code scanning interface goes here.</p>
            </>
          )}
          {current === 'overview' && (
            <>
              <h1 className="text-2xl font-bold mb-4">Overview</h1>
              <p>City overview and statistics.</p>
            </>
          )}
          {current === 'announcements' && (
            <>
              <h1 className="text-2xl font-bold mb-4">Announcements & Updates</h1>
              <p>Latest news for scholars.</p>
            </>
          )}
          {current === 'service' && (
            <>
              <h1 className="text-2xl font-bold mb-4">Community Service Status</h1>
              <p>Track your community service hours.</p>
            </>
          )}
          {current === 'documents' && (
            <>
              <h1 className="text-2xl font-bold mb-4">Documents</h1>
              <p>Upload or download required documents.</p>
            </>
          )}
          {current === 'concerns' && (
            <>
              <h1 className="text-2xl font-bold mb-4">Concerns</h1>
              <p>Submit and view concerns.</p>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Layout;
