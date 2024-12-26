import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import dailySeedContent from '../content/dailySeed.json';

const DailySeed = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 min-h-screen font-sans text-gray-800 dark:text-pale-orange flex flex-col justify-between">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Today's Seeds</h1>
        {dailySeedContent.seeds.map(seed => (
          <div key={seed.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 mb-8">
            <Link to={`/daily-seed-detail/${seed.id}`} className="block">
              <h2 className="text-xl font-semibold mb-2">{seed.title}</h2>
              <p className="mb-4">{seed.description}</p>
            </Link>
            <Link to={`/daily-seed-detail/${seed.id}`}>
              <button className="px-5 py-2 bg-blue-200 hover:bg-blue-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default DailySeed;