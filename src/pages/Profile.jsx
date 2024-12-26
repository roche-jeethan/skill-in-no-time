import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState('https://via.placeholder.com/100');
  const [name, setName] = useState('Your Name');
  const [bio, setBio] = useState('Learning Enthusiast');
  const [email, setEmail] = useState('youremail@example.com');
  const [password, setPassword] = useState('');

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Save profile changes logic here
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 min-h-screen font-sans text-gray-800 dark:text-pale-orange flex-grow">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 w-full sm:w-3/4 md:w-1/2">
          <div className="flex flex-col items-center mb-6">
            <img
              src={profilePhoto}
              alt="Avatar"
              className="rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-700 dark:text-pale-orange">{bio}</p>
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
          <button
            className="mt-6 w-full py-2 bg-blue-200 hover:bg-blue-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </div>

        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 w-full sm:w-3/4 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="profilePhoto">Profile Photo</label>
                <input
                  type="file"
                  id="profilePhoto"
                  className="w-full px-3 py-2 border rounded"
                  onChange={(e) => setProfilePhoto(URL.createObjectURL(e.target.files[0]))}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  className="w-full px-3 py-2 border rounded"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="email">Change Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="password">Change Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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