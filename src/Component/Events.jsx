import React, { useState } from "react";

const eventsData = [
  {
    id: 1,
    title: "AI & ML Workshop",
    date: "March 10, 2025",
    image: "/assets/ai-workshop.jpg",
    registrationLink: "https://example.com/register-ai",
  },
  {
    id: 2,
    title: "Hackathon 2025",
    date: "April 5, 2025",
    image: "/assets/hackathon.jpg",
    registrationLink: "https://example.com/register-hackathon",
  },
  {
    id: 3,
    title: "Guest Lecture: Future of Computing",
    date: "May 15, 2025",
    image: "/assets/guest-lecture.jpg",
    registrationLink: "https://example.com/register-lecture",
  },
  {
    id: 4,
    title: "Cybersecurity Seminar",
    date: "June 20, 2025",
    image: "/assets/cybersecurity.jpg",
    registrationLink: "https://example.com/register-cybersecurity",
  },
  {
    id: 5,
    title: "Blockchain Conference",
    date: "July 10, 2025",
    image: "/assets/blockchain.jpg",
    registrationLink: "https://example.com/register-blockchain",
  },
];

const Events = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 3;
  
  const startIndex = currentPage * eventsPerPage;
  const selectedEvents = eventsData.slice(startIndex, startIndex + eventsPerPage);

  const nextPage = () => {
    if (startIndex + eventsPerPage < eventsData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="py-12 bg-white text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800">Upcoming Events</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {selectedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#112240] rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{event.title}</h3>
              <p className="text-gray-300">{event.date}</p>
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
              >
                Register Now
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevPage}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
              currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={currentPage === 0}
          >
            &lt;
          </button>
          <button
            onClick={nextPage}
            className={`px-4 py-2 bg-blue-700 text-white rounded-md ${
              startIndex + eventsPerPage >= eventsData.length ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
            }`}
            disabled={startIndex + eventsPerPage >= eventsData.length}
          >
            &gt;
          </button>
        </div>

        <div className="text-center mt-10">
          <a
            href="/events"
            className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-6 py-3 rounded-md hover:opacity-80"
          >
            View More Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
