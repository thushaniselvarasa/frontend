import React from "react";
import mision from "../assets/mision.jpg";
import landingimg from "../assets/landingimg.jpg";

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-yellow-500">
          About CompSoc
        </h2>
        <p className="mt-6 text-lg text-center text-gray-600 max-w-3xl mx-auto">
          CompSoc is the official Computer Science Society of the University of Jaffna. 
          We bring together students, alumni, and faculty to foster a community of innovation, 
          learning, and collaboration in the tech industry.
        </p>

        {/* Mission Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={mision} // Update with actual image path
            alt="Mission"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-yellow-500">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To empower students with the latest in technology, networking opportunities, 
              and hands-on experience through workshops, hackathons, and industry collaborations.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-12 flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
          <img
            src={landingimg} // Update with actual image path
            alt="Vision"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-yellow-500">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To build a vibrant tech community that nurtures innovation, fosters industry connections, 
              and enhances career opportunities for aspiring professionals.
            </p>
          </div>
        </div>

        {/* Join Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="bg-yellow-500 text-white py-4 px-6 rounded-md text-lg font-semibold transition 
                      hover:bg-yellow-600 shadow-md"
          >
            Join CompSoc Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
