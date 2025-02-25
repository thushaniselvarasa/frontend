// components/CTA.jsx

import React from 'react';

const CTA = () => {
  return (
    <section id="join-us" className="bg-gray-800 py-20 text-center">
      <h2 className="text-3xl font-semibold text-white mb-6">Ready to Join the IEEE Computer Society?</h2>
      <p className="text-lg text-gray-300 mb-8">Become a member and gain access to exclusive events, resources, and opportunities.</p>
      <a href="#contact" className="px-8 py-4 bg-indigo-500 text-white font-semibold rounded-full text-lg hover:bg-indigo-600">
        Sign Up Now
      </a>
    </section>
  );
};

export default CTA;
