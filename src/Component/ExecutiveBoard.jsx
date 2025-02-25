import React, { useState } from "react";
import user1 from "../assets/profile-pictures/user1.jpg"; // Ensure correct paths for images

const members = [
  {
    name: "John Doe",
    position: "President",
    description:
      "A student from the DCS, serves as the president. With strong leadership skills, he guides the Society, fostering growth, collaboration, and innovation among its members.",
    image: user1,
  },
  {
    name: "Jane Smith",
    position: "Vice President",
    description:
      "An active member contributing to the strategic growth of the society.",
    image: "/assets/vice-president.jpg",
  },
  {
    name: "Michael Brown",
    position: "Secretary",
    description:
      "Handles administrative duties, ensuring smooth communication within the society.",
    image: "/assets/secretary.jpg",
  },
  {
    name: "Sarah Wilson",
    position: "Treasurer",
    description:
      "Manages financial records and ensures budget allocations for events.",
    image: "/assets/treasurer.jpg",
  },
  {
    name: "David Lee",
    position: "Committee Member",
    description:
      "Works closely with the board to organize events and initiatives.",
    image: "/assets/committee.jpg",
  },
];

const pastYears = [
  {
    year: "2023",
    president: {
      name: "John Doe",
      image: "/assets/president-2023.jpg",
      description:
        "John Doe served as the president, leading the society with dedication and vision.",
    },
    secretary: {
      name: "Alice Green",
      image: "/assets/secretary-2023.jpg",
      description:
        "Alice Green efficiently handled all secretarial duties, ensuring smooth communication.",
    },
  },
  {
    year: "2022",
    president: {
      name: "Emma Johnson",
      image: "/assets/president-2022.jpg",
      description:
        "Emma Johnson was a strategic leader who contributed significantly to the society.",
    },
    secretary: {
      name: "Mark White",
      image: "/assets/secretary-2022.jpg",
      description:
        "Mark White played a key role in maintaining records and official communications.",
    },
  },
  {
    year: "2021",
    president: {
      name: "Chris Evans",
      image: "/assets/president-2021.jpg",
      description:
        "Chris Evans guided the society with innovative ideas and great leadership.",
    },
    secretary: {
      name: "Sophia Brown",
      image: "/assets/secretary-2021.jpg",
      description:
        "Sophia Brown ensured smooth administrative operations throughout her tenure.",
    },
  },
];

const ExecutiveBoard = () => {
  const [selectedYear, setSelectedYear] = useState(""); // Store selected past year

  return (
    <section className="py-12 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        {/* Team Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            CompSoc Executive Board
          </h2>
          <p className="mt-4 text-gray-600">
            The Annual General Meeting (AGM) of the Computer Society (CompSoc),
            University of Jaffna, was held on 16th January 2024 at the Computer
            Science Auditorium (CSA), Department of Computer Science (DCS). With
            the participation of students and faculty, the election process
            resulted in the formation of the following committee.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-blue-500">{member.position}</p>
              <p className="mt-3 text-gray-700 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Past Years Dropdown */}
        <div className="text-center mt-12">
          <select
            onChange={(e) => setSelectedYear(e.target.value)}
            value={selectedYear}
            className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a Past Year</option>
            {pastYears.map((yearData, index) => (
              <option key={index} value={yearData.year}>
                {yearData.year}
              </option>
            ))}
          </select>
        </div>

        {/* Past Year Details */}
        {selectedYear && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 text-center">
              {selectedYear} Executive Board
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {/* President */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src={
                    pastYears.find((yearData) => yearData.year === selectedYear)
                      .president.image
                  }
                  alt="President"
                  className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
                />
                <h3 className="text-xl font-semibold mt-4 text-gray-900">
                  {
                    pastYears.find((yearData) => yearData.year === selectedYear)
                      .president.name
                  }
                </h3>
                <p className="text-blue-500">President</p>
                <p className="mt-3 text-gray-700 text-sm">
                  {
                    pastYears.find((yearData) => yearData.year === selectedYear)
                      .president.description
                  }
                </p>
              </div>

              {/* Secretary */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src={
                    pastYears.find((yearData) => yearData.year === selectedYear)
                      .secretary.image
                  }
                  alt="Secretary"
                  className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
                />
                <h3 className="text-xl font-semibold mt-4 text-gray-900">
                  {
                    pastYears.find((yearData) => yearData.year === selectedYear)
                      .secretary.name
                  }
                </h3>
                <p className="text-blue-500">Secretary</p>
                <p className="mt-3 text-gray-700 text-sm">
                  {
                    pastYears.find((yearData) => yearData.year === selectedYear)
                      .secretary.description
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExecutiveBoard;
