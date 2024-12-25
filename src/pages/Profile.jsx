import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen font-sans text-gray-800">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10 flex flex-col items-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-3/4 md:w-1/2">
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Avatar"
              className="rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold">Your Name</h2>
            <p className="text-gray-700">Learning Enthusiast</p>
          </div>
          <div className="space-y-4 w-full">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Streak:</span>
              <span>5 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Seeds Completed:</span>
              <span>28</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Badges Earned:</span>
              <span>3</span>
            </div>
          </div>
          <button className="mt-6 w-full py-2 bg-blue-200 hover:bg-blue-300 rounded-md">
            Edit Profile
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;