// components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-800">
      <div className="text-2xl font-semibold text-white">
        <span className="text-indigo-500">IEEE</span> Computer Society
      </div>
      <nav className="space-x-6 text-lg text-gray-300">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="/events" className="hover:text-white">Events</Link>
        <Link to="/team" className="hover:text-white">Team</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
