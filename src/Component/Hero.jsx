import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center px-4 bg-gradient-to-b from-[#0A1F44] to-[#06172E] w-full min-h-screen border border-neutral-700/80 rounded-lg shadow-xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center tracking-wide text-white font-extrabold drop-shadow-md mt-10">
        Department of Computer Science
        <span className="text-yellow-500"> University of Jaffna</span>
      </h1>
      <p className="mt-4 text-lg text-center text-gray-300 max-w-3xl">
        Our Computer Science department's vibrant society fosters innovation, collaboration, and learning through tech events, workshops, and networking, empowering students with industry-relevant skills and a strong community.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="#"
          className="bg-gradient-to-r from-yellow-500 to-yellow-700 py-3 px-6 rounded-lg text-white font-semibold transition transform hover:scale-105 hover:shadow-lg"
        >
          Join Us
        </a>
      </div>

      {/* Videos Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center w-full p-4">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-yellow-600 shadow-lg shadow-yellow-400"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-yellow-600 shadow-lg shadow-yellow-400"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
