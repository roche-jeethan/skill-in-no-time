import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import dailySeedContent from '../content/dailySeed.json';

const DailySeedDetail = () => {
  const { id } = useParams();
  const [completed, setCompleted] = useState(false);
  const [seed, setSeed] = useState(null);

  useEffect(() => {
    const foundSeed = dailySeedContent.seeds.find(seed => seed.id === parseInt(id));
    setSeed(foundSeed);
  }, [id]);

  const handleMarkAsComplete = () => {
    setCompleted(true);
    // Additional logic to save the completion status can be added here
  };

  if (!seed) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 min-h-screen font-sans text-gray-800 dark:text-pale-orange flex flex-col justify-between">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10 flex-grow">
        <h1 className="text-3xl font-bold mb-6">{seed.title}</h1>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 mb-8">
          <p className="mb-4">{seed.content}</p>
          <button
            className={`px-5 py-2 ${completed ? 'bg-green-200' : 'bg-blue-200 hover:bg-blue-300'} dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md`}
            onClick={handleMarkAsComplete}
            disabled={completed}
          >
            {completed ? 'Completed' : 'Mark as Complete'}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DailySeedDetail;