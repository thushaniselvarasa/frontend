import React, { useState, useEffect } from "react";

const eventsData = {
  2024: [
    {
      title: "Blockchain & Web3 Summit",
      description: "Exploring the future of decentralized technology.",
      date: "February 10, 2024",
      speakers: ["Mr. David Carter", "Ms. Emily Johnson"],
      flyer: "/assets/flyers/blockchain.jpg",
      gallery: ["/assets/gallery/block1.jpg", "/assets/gallery/block2.jpg"],
    },
    {
      title: "AI in Healthcare",
      description: "Advancements of AI in the medical field.",
      date: "April 22, 2024",
      speakers: ["Dr. Sarah Lee", "Dr. Robert King"],
      flyer: "/assets/flyers/ai-health.jpg",
      gallery: ["/assets/gallery/aihealth1.jpg", "/assets/gallery/aihealth2.jpg"],
    },
  ],
  2023: [
    {
      title: "Cyber Security Awareness",
      description: "A discussion on the importance of cybersecurity.",
      date: "June 25, 2023",
      speakers: ["Mr. Robert Brown", "Ms. Emma Green"],
      flyer: "/assets/flyers/cybersecurity.jpg",
      gallery: ["/assets/gallery/cyber1.jpg", "/assets/gallery/cyber2.jpg"],
    },
  ],
  2022: [
    {
      title: "Web Development Bootcamp",
      description: "A hands-on bootcamp for web development.",
      date: "September 10, 2022",
      speakers: ["John Doe", "Sarah Wilson"],
      flyer: "/assets/flyers/web-dev.jpg",
      gallery: ["/assets/gallery/web1.jpg", "/assets/gallery/web2.jpg"],
    },
  ],
};

const PastEvents = () => {
  const currentYear = new Date().getFullYear();
  const availableYears = Object.keys(eventsData).map(Number).sort((a, b) => b - a);
  const defaultYear = availableYears.includes(currentYear) ? currentYear : availableYears[0];

  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const [selectedGallery, setSelectedGallery] = useState(null);

  return (
    <section className="py-12 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Past Events Gallery</h2>
          <p className="mt-4 text-gray-700">
            Explore events from previous years, including details, speakers, and gallery images.
          </p>
        </div>

        {/* Year Selection */}
        <div className="flex justify-center space-x-4 mb-8">
          {availableYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-3 rounded-md text-lg font-medium transition ${
                selectedYear === year ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Events for Selected Year */}
        {selectedYear && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-blue-500 text-center">{selectedYear} Events</h3>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              {eventsData[selectedYear].map((event, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <img src={event.flyer} alt={event.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                  <h4 className="text-xl font-semibold">{event.title}</h4>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                  <p className="mt-2 text-gray-800"><strong>Date:</strong> {event.date}</p>
                  <p className="mt-2 text-gray-800"><strong>Speakers:</strong> {event.speakers.join(", ")}</p>
                  <button
                    onClick={() => setSelectedGallery(event.gallery)}
                    className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                  >
                    View Gallery
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Modal */}
        {selectedGallery && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
              <button
                onClick={() => setSelectedGallery(null)}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Close
              </button>
              <h3 className="text-xl font-semibold text-center mb-4">Event Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {selectedGallery.map((img, idx) => (
                  <img key={idx} src={img} alt="Event" className="w-full h-40 object-cover rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PastEvents;
