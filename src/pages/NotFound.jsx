import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 min-h-screen font-sans text-gray-800 dark:text-pale-orange flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-10 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <p className="text-2xl mb-6">Page Not Found</p>
        <p className="text-lg mb-6">The page you're looking for doesn't exist.</p>
        <Link to="/" className="px-6 py-3 bg-blue-200 hover:bg-blue-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md shadow-md">
          Go Back Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;