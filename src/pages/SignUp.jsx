import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen font-sans text-gray-800 flex flex-col justify-between">
      <main className="max-w-md mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="bg-white rounded-lg shadow-lg p-6 mb-8" onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">ReEnter Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="w-full py-2 bg-blue-200 hover:bg-blue-300 rounded-md mb-4" type="submit">
            Sign Up
          </button>
          <div className="text-center mb-4">or</div>
          <button
            type="button"
            className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-md mb-2"
          >
            Sign up with Google
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Already have an account? <Link to="/sign-in" className="text-blue-600 hover:underline">Sign In</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;