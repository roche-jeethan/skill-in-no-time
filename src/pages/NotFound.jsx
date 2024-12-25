import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen font-sans text-gray-800">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
        <p className="text-lg mb-6">The page you're looking for doesn't exist.</p>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;