import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform sign-out logic here
    // For example, clear user session, tokens, etc.
    // After sign-out, redirect to the home page
    navigate('/');
  }, [navigate]);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 min-h-screen font-sans text-gray-800 dark:text-pale-orange flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Signing Out...</h1>
        <p className="text-lg mb-6">You are being signed out. Please wait...</p>
      </main>
    </div>
  );
};

export default SignOut;