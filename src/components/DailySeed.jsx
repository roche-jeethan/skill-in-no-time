import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const DailySeed = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen font-sans text-gray-800">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Today's Seed</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Quick Tech Tip</h2>
          <p className="mb-4">
            Learn a tiny tidbit about technology each day. Today's insight helps you master
            efficiency in React hooks.
          </p>
          <button className="px-5 py-2 bg-blue-200 hover:bg-blue-300 rounded-md">
            Mark as Complete
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DailySeed;