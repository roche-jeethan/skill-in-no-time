import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProfile, saveProfile, getDailySeedData, saveDailySeedData } from '../utils/localStorage';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    email: '',
    bio: '',
    avatar: null,
  });
  const [dailySeedData, setDailySeedData] = useState({
    streak: 0,
    totalSeedsCompleted: 0,
    badgesEarned: 0,
  });

  useEffect(() => {
    const userProfile = getProfile();
    if (userProfile) {
      setProfile(userProfile);
    }

    const seedData = getDailySeedData();
    if (seedData) {
      setDailySeedData(seedData);
    }
  }, []);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    saveProfile(profile);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 min-h-screen font-sans text-gray-800 dark:text-pale-orange">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-10 flex flex-col items-center">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
          <div className="flex flex-col items-center mb-6">
            {profile.avatar && (
              <img
                src={profile.avatar}
                alt="Avatar"
                className="rounded-full mb-4 w-24 h-24 object-cover"
              />
            )}
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-gray-700 dark:text-pale-orange">{profile.bio}</p>
          </div>
          <div className="space-y-4 w-full">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Streak:</span>
              <span>{dailySeedData.streak} days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Seeds Completed:</span>
              <span>{dailySeedData.totalSeedsCompleted}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Badges Earned:</span>
              <span>{dailySeedData.badgesEarned}</span>
            </div>
          </div>
          <button
            className="mt-6 w-full py-2 bg-blue-200 hover:bg-blue-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </div>

        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-pale-orange"
                  value={profile.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-pale-orange"
                  value={profile.age}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-pale-orange"
                  value={profile.bio}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="avatar">Avatar</label>
                <input
                  type="file"
                  id="avatar"
                  className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-pale-orange"
                  onChange={handleAvatarChange}
                />
              </div>
              <button
                className="w-full py-2 bg-blue-200 hover:bg-blue-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md mb-4"
                onClick={handleSaveProfile}
              >
                Save
              </button>
              <button
                className="w-full py-2 bg-red-200 hover:bg-red-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Profile;