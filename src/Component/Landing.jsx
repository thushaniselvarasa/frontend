import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Landing() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          IEEE Computer Society
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Innovate. Learn. Connect.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg text-lg"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/about">Join Us</Link> {/* Link to About page */}
        </motion.button>
      </section>
      
      {/* Add other sections as before */}
    </div>
  );
}
