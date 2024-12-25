// Quiz.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    alert(`You selected ${selectedOption}`);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen font-sans text-gray-800">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Today's Quiz</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="mb-4 font-semibold">What does "React" stand for?</p>
          <div className="space-y-2 mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Option A"
                checked={selectedOption === 'Option A'}
                onChange={handleOptionChange}
              />
              <span>Really Easy ACTions</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Option B"
                checked={selectedOption === 'Option B'}
                onChange={handleOptionChange}
              />
              <span>It's just a library name, no acronym</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Option C"
                checked={selectedOption === 'Option C'}
                onChange={handleOptionChange}
              />
              <span>Random Ecosystem of App Components & Tools</span>
            </label>
          </div>
          <button
            className="px-5 py-2 bg-blue-200 hover:bg-blue-300 rounded-md"
            onClick={handleSubmit}
          >
            Submit Answer
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;