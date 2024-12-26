import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { saveUser } from '../utils/localStorage';
import Footer from '../components/Footer';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      saveUser(email, password);
      navigate('/sign-in');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 min-h-screen font-sans text-gray-800 dark:text-pale-orange flex flex-col justify-between">
      <main className="max-w-md mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-pale-orange">Sign Up</h1>
        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}
        <form className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 mb-8" onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-pale-orange"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-pale-orange"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="confirmPassword">ReEnter Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-pale-orange"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="w-full py-2 bg-blue-200 hover:bg-blue-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md mb-4" type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm dark:text-pale-orange">
            Already have an account? <Link to="/sign-in" className="text-blue-600 dark:text-blue-400 hover:underline">Sign In</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;