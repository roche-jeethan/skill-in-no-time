import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveProfile } from '../utils/localStorage';
import Footer from '../components/Footer';

const CreateProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setEmail(userEmail);
    } else {
      navigate('/sign-in');
    }
  }, [navigate]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const profile = { name, age, email, bio, avatar };
      saveProfile(profile);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 min-h-screen font-sans text-gray-800 dark:text-pale-orange flex flex-col justify-between">
      <main className="max-w-md mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-pale-orange">Create Profile</h1>
        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}
        <form className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 mb-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-pale-orange"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-pale-orange"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-pale-orange"
              value={email}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-pale-orange"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-pale-orange mb-2" htmlFor="avatar">
              Avatar
            </label>
            <input
              type="file"
              id="avatar"
              className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-pale-orange"
              onChange={handleAvatarChange}
            />
            {avatar && <img src={avatar} alt="Avatar Preview" className="mt-4 rounded-full w-24 h-24 object-cover" />}
          </div>
          <button
            className="w-full py-2 bg-blue-200 hover:bg-blue-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md mb-4"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Creating Profile...' : 'Create Profile'}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CreateProfile;