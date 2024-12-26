import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isHome }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-pale-orange">
          SkillInNoTime
        </Link>
        <div className="space-x-4 flex items-center">
          {isHome ? (
            <>
              <Link to="/sign-up" className="text-gray-700 hover:text-gray-900 dark:text-pale-orange">
                Sign Up
              </Link>
              <Link to="/sign-in" className="text-gray-700 hover:text-gray-900 dark:text-pale-orange">
                Sign In
              </Link>
            </>
          ) : (
            <>
              <Link to="/daily-seed" className="text-gray-700 hover:text-gray-900 dark:text-pale-orange">
                Daily Seed
              </Link>
              <Link to="/leaderboard" className="text-gray-700 hover:text-gray-900 dark:text-pale-orange">
                Leaderboard
              </Link>
              <Link to="/profile" className="text-gray-700 hover:text-gray-900 dark:text-pale-orange">
                Profile
              </Link>
              <Link to="/" className="text-gray-700 hover:text-gray-900 dark:text-pale-orange">
                Sign Out
              </Link>
            </>
          )}
          <button onClick={toggleTheme} className="text-gray-700 hover:text-gray-900 dark:text-pale-orange">
            {theme === 'light' ? '🌞' : '🌜'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;