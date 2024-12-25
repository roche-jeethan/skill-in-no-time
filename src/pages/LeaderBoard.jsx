import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Leaderboard = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen font-sans text-gray-800">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Rank</th>
                <th className="py-2">User</th>
                <th className="py-2">Seeds Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">1</td>
                <td className="py-2">John Doe</td>
                <td className="py-2">28</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2</td>
                <td className="py-2">Jane Smith</td>
                <td className="py-2">25</td>
              </tr>
              <tr>
                <td className="py-2">3</td>
                <td className="py-2">Alice Chen</td>
                <td className="py-2">24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;