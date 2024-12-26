import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-pale-orange py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} SkillInNoTime. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 dark:text-pale-orange dark:hover:text-white">
            <FaXTwitter size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 dark:text-pale-orange dark:hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 dark:text-pale-orange dark:hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm">
          Contact Developer: <a href="mailto:jeethanroche@gmail.com" className="text-gray-700 hover:text-gray-900 dark:text-pale-orange dark:hover:text-white">jeethanroche@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;