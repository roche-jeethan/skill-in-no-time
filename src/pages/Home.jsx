import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import homeContent from '../content/homeContent.json';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 min-h-screen font-sans text-gray-800 dark:text-pale-orange">
      <Navbar isHome={true} />

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-10 px-4">
        <h1 className="text-5xl font-bold mb-4">{homeContent.hero.title}</h1>
        <p className="text-lg mb-8">{homeContent.hero.subtitle}</p>
        <Link to="/sign-up">
          <button className="px-6 py-3 bg-blue-200 hover:bg-blue-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded shadow-md">
            Get Started
          </button>
        </Link>
      </header>

      {/* About / Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">{homeContent.about.title}</h2>
        <p className="mb-6">{homeContent.about.description}</p>
        <div className="space-y-8">
          {homeContent.features.map((feature, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center`}>
              <img src={feature.image} alt={feature.title} className="w-full md:w-1/2 rounded shadow-md mb-4 md:mb-0" />
              <div className="md:w-1/2 md:px-6">
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-pale-orange">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;