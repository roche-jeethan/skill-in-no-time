import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen font-sans text-gray-800 flex flex-col justify-between">
      <main className="max-w-md mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
        <form className="bg-white rounded-lg shadow-lg p-6 mb-8" onSubmit={handleSignIn}>
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
          <button className="w-full py-2 bg-blue-200 hover:bg-blue-300 rounded-md mb-4" type="submit">
            Sign In
          </button>
          <div className="flex justify-between items-center mb-4">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
            <Link to="/sign-up" className="text-sm text-blue-600 hover:underline">
              Create one
            </Link>
          </div>
          <div className="text-center mb-4">or</div>
          <button
            type="button"
            className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-md mb-2"
            onClick={() => alert('Google Sign-In')}
          >
            Sign in with Google
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;