// Progress.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Progress = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen font-sans text-gray-800">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Your Progress</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="mb-4">
            You have completed <strong>5</strong> daily seeds this week!
          </p>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div className="bg-blue-300 h-4 rounded-full" style={{ width: '50%' }}></div>
          </div>
          <p>
            Keep going to reach your weekly goal of <strong>10</strong> seeds!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Progress;