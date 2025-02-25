import React from "react";
import mision from "../assets/mision.jpg";
import landingimg from "../assets/landingimg.jpg";

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-blue-500">
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
            <h3 className="text-2xl font-semibold text-blue-500">Our Mission</h3>
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
            <h3 className="text-2xl font-semibold text-blue-500">Our Vision</h3>
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
            className="bg-blue-500 text-white py-4 px-6 rounded-md text-lg font-semibold transition 
                      hover:bg-blue-600 shadow-md"
          >
            Join CompSoc Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;





        {/* Who Can Join? */}
        {/* <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center text-orange-500">
            Who Can Join?
          </h3>
          <p className="mt-4 text-lg text-center text-neutral-300 max-w-2xl mx-auto">
            CompSoc is open to:
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-6 text-lg text-neutral-300">
            <li className="bg-neutral-900 px-6 py-3 rounded-md shadow-md">
              🎓 Computer Science Students
            </li>
            <li className="bg-neutral-900 px-6 py-3 rounded-md shadow-md">
              🎓 Alumni & Graduates
            </li>
            <li className="bg-neutral-900 px-6 py-3 rounded-md shadow-md">
              👨‍🏫 Faculty Members
            </li>
          </ul>
        </div>

        {/* Why Join? */}
        {/*<div className="mt-16">
          <h3 className="text-3xl font-semibold text-center text-orange-500">
            Why Join CompSoc?
          </h3>
          <p className="mt-4 text-lg text-center text-neutral-300 max-w-2xl mx-auto">
            Being a part of CompSoc opens doors to a world of opportunities, including:
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-6 bg-neutral-900 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-orange-400">🤝 Networking</h4>
              <p className="mt-2 text-neutral-300">
                Connect with like-minded peers, alumni, and industry experts.
              </p>
            </div>
            <div className="p-6 bg-neutral-900 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-orange-400">💡 Tech Workshops</h4>
              <p className="mt-2 text-neutral-300">
                Learn from industry leaders and gain hands-on experience in the latest tech trends.
              </p>
            </div>
            <div className="p-6 bg-neutral-900 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-orange-400">🚀 Hackathons</h4>
              <p className="mt-2 text-neutral-300">
                Participate in competitive coding challenges and innovate with peers.
              </p>
            </div>
            <div className="p-6 bg-neutral-900 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-orange-400">🎤 Guest Lectures</h4>
              <p className="mt-2 text-neutral-300">
                Get insights from top professionals in the software and AI industry.
              </p>
            </div>
            <div className="p-6 bg-neutral-900 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-orange-400">🌍 Career Opportunities</h4>
              <p className="mt-2 text-neutral-300">
                Gain access to internships, job postings, and career mentorship.
              </p>
            </div>
            <div className="p-6 bg-neutral-900 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-orange-400">🎯 Leadership Roles</h4>
              <p className="mt-2 text-neutral-300">
                Develop leadership skills by organizing events and mentoring juniors.
              </p>
            </div>
          </div>
        </div> */}

        {/* Join Button */}
        