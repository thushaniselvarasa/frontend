import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 px-4 bg-gradient-to-b from-blue-200 to-white w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center tracking-wide text-black font-bold">
        Department of Computer Science
        <span className="text-blue-800"> University of Jaffna</span>
      </h1>
      <p className="mt-6 text-lg text-center text-neutral-600 max-w-3xl">
        Our Computer Science department's vibrant society fosters innovation, collaboration, and learning through tech events, workshops, and networking, empowering students with industry-relevant skills and a strong community.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-600 to-blue-900 py-3 px-5 rounded-md text-white font-semibold transition hover:scale-105"
        >
          Join Us
        </a>
      </div>

      {/* Videos Section */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 justify-center w-full bg-white">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-blue-900 shadow-lg shadow-blue-500 bg-white"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-blue-900 shadow-lg shadow-blue-500 bg-white"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
