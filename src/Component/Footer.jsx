// components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="text-center text-gray-300">
        <p className="mb-4">&copy; 2025 IEEE Computer Society. All rights reserved.</p>
        <div className="space-x-6">
          <a href="https://facebook.com" className="hover:text-white">Facebook</a>
          <a href="https://twitter.com" className="hover:text-white">Twitter</a>
          <a href="https://linkedin.com" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
